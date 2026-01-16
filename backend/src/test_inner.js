try {
    const express = require('express');
    console.log('Express loaded successfully from src');
    console.log('Resolved path:', require.resolve('express'));
} catch (err) {
    console.error('Failed to load express from src:', err.message);
    console.error('Code:', err.code);
    console.error('Paths:', module.paths);
}
