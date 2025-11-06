<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type');

// Handle preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Only accept POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

// Check for required fields
$required = ['first_name', 'last_name', 'email', 'phone', 'consent'];
$missing = [];

foreach ($required as $field) {
    if (empty($_POST[$field])) {
        $missing[] = $field;
    }
}

if (!empty($missing)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Missing required fields: ' . implode(', ', $missing)]);
    exit;
}

// Honeypot check
if (!empty($_POST['__hp'])) {
    // Bot detected - return fake success
    echo json_encode(['ok' => true]);
    exit;
}

// Validate email
if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Invalid email address']);
    exit;
}

// Sanitize input
$data = [
    'first_name' => htmlspecialchars(trim($_POST['first_name']), ENT_QUOTES, 'UTF-8'),
    'last_name' => htmlspecialchars(trim($_POST['last_name']), ENT_QUOTES, 'UTF-8'),
    'email' => filter_var($_POST['email'], FILTER_SANITIZE_EMAIL),
    'phone' => htmlspecialchars(trim($_POST['phone']), ENT_QUOTES, 'UTF-8'),
    'message' => isset($_POST['message']) ? htmlspecialchars(trim($_POST['message']), ENT_QUOTES, 'UTF-8') : '',
    'service' => isset($_POST['service']) ? htmlspecialchars(trim($_POST['service']), ENT_QUOTES, 'UTF-8') : '',
    'consent' => $_POST['consent'] === 'on' ? 'yes' : 'no',
    
    // Technical fields
    'timestamp' => isset($_POST['__ts']) ? intval($_POST['__ts']) : time() * 1000,
    'utm_source' => isset($_POST['utm_source']) ? htmlspecialchars(trim($_POST['utm_source']), ENT_QUOTES, 'UTF-8') : '',
    'utm_medium' => isset($_POST['utm_medium']) ? htmlspecialchars(trim($_POST['utm_medium']), ENT_QUOTES, 'UTF-8') : '',
    'utm_campaign' => isset($_POST['utm_campaign']) ? htmlspecialchars(trim($_POST['utm_campaign']), ENT_QUOTES, 'UTF-8') : '',
    'utm_term' => isset($_POST['utm_term']) ? htmlspecialchars(trim($_POST['utm_term']), ENT_QUOTES, 'UTF-8') : '',
    'utm_content' => isset($_POST['utm_content']) ? htmlspecialchars(trim($_POST['utm_content']), ENT_QUOTES, 'UTF-8') : '',
    'gclid' => isset($_POST['gclid']) ? htmlspecialchars(trim($_POST['gclid']), ENT_QUOTES, 'UTF-8') : '',
    'fbclid' => isset($_POST['fbclid']) ? htmlspecialchars(trim($_POST['fbclid']), ENT_QUOTES, 'UTF-8') : '',
    'referrer' => isset($_POST['referrer']) ? htmlspecialchars(trim($_POST['referrer']), ENT_QUOTES, 'UTF-8') : '',
    'path' => isset($_POST['path']) ? htmlspecialchars(trim($_POST['path']), ENT_QUOTES, 'UTF-8') : '',
    'ip' => $_SERVER['REMOTE_ADDR'],
    'user_agent' => $_SERVER['HTTP_USER_AGENT']
];

// Save to file (CSV format)
$filename = __DIR__ . '/leads.csv';
$isNewFile = !file_exists($filename);

$fp = fopen($filename, 'a');

if ($fp === false) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Cannot save lead']);
    exit;
}

// Write header if new file
if ($isNewFile) {
    fputcsv($fp, array_keys($data));
}

// Write data
fputcsv($fp, $data);
fclose($fp);

// Return success
echo json_encode(['ok' => true]);
exit;
