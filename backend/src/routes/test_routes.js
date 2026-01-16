try {
    const express = require('express');
    console.log('Express loaded successfully from routes');
    console.log('Resolved path:', require.resolve('express'));
} catch (err) {
    console.error('Failed to load express from routes:', err.message);
}
