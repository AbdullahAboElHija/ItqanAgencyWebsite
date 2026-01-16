try {
    const express = require('express');
    console.log('Express loaded successfully');
} catch (err) {
    console.error('Failed to load express:', err.message);
    console.error('Code:', err.code);
    console.error('Paths:', module.paths);
}
