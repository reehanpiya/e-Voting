<?php

declare(strict_types=1);

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes - Platform E-Voting Sekolah
|--------------------------------------------------------------------------
| Seluruh endpoint mengikuti standar di PRD dan TASKS.md:
| - Format Respon seragam: { success, message, data, errors }
| - URL menggunakan kebab-case
*/

Route::get('/health', function (): JsonResponse {
    return response()->json([
        'success' => true,
        'message' => 'E-Voting Sekolah API is running smoothly.',
        'data' => [
            'app' => 'E-Voting Sekolah Backend',
            'version' => '1.0.0',
            'status' => 'READY',
        ],
    ]);
});

// Area Publik (Siapa Saja)
Route::prefix('public')->group(function (): void {
    // TASK-BE-06 & TASK-BE-08
    // Route::get('/status', ...);
    // Route::post('/check-dpt', ...);
    // Route::get('/candidates', ...);
    // Route::get('/schedule', ...);
    // Route::get('/realcount', ...);
    // Route::get('/results', ...);
});

// Area Verifikasi Siswa (Mobile)
Route::prefix('voter')->group(function (): void {
    // TASK-BE-06: Verifikasi NISN + DOB -> QR Token
    // Route::post('/verify', ...);
});

// Area Bilik Suara (Kiosk Mode)
Route::prefix('booth')->group(function (): void {
    // TASK-BE-07: Anti double-vote transaction
    // Route::post('/validate-token', ...);
    // Route::post('/vote', ...);
});

// Area Auth Admin
Route::prefix('admin')->group(function (): void {
    // TASK-BE-02: Login & Logout
    // Route::post('/login', ...);
    // Route::post('/logout', ...);
});

// Area Super Admin (KPU)
Route::prefix('super')->group(function (): void {
    // TASK-BE-04: Approval, 5 Akun, Monev, Cleanup
    // Route::post('/registration-toggle', ...);
    // Route::get('/registrations', ...);
    // Route::post('/registrations/{id}/approve', ...);
    // Route::get('/progress', ...);
    // Route::post('/cleanup', ...);
});

// Area Admin Sekolah
Route::prefix('school')->group(function (): void {
    // TASK-BE-05 & TASK-BE-08: DPT, Kandidat, Jadwal, Hasil & Laporan
    // Route::post('/voters/import', ...);
    // Route::post('/voters/lock', ...);
    // Route::apiResource('/candidates', ...);
    // Route::post('/candidates/lock', ...);
    // Route::put('/schedule', ...);
    // Route::post('/election/start', ...);
    // Route::post('/election/close', ...);
    // Route::post('/election/finalize', ...);
    // Route::post('/election/publish', ...);
    // Route::get('/results', ...);
    // Route::get('/report', ...);
});
