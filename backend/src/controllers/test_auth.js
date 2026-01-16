try {
    console.log('Requiring authController...');
    require('./authController');
    console.log('authController loaded');
} catch (e) {
    console.error('Failed to load authController:', e);
}
