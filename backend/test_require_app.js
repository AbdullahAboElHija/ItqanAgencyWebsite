try {
    require('./src/app');
    console.log('App loaded successfully');
} catch (err) {
    console.error('Failed to load app:', err);
}
