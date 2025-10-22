# Prepared Citizen Corps Website

Official website for Prepared Citizen Corps - building open-source tactical technology starting with WARLOCK.

## Overview

Single-page static website showcasing the WARLOCK helmet-mounted AR system. Built with a terminal/hacker aesthetic featuring scanline effects, glow text, and a mobile-first responsive design. All CSS is inline, no external dependencies.

## Features

- **Single Page**: Focused landing page for WARLOCK project
- **WARLOCK Showcase**: Detailed specs, features, and current development status
- **Two Primary CTAs**: View WARLOCK on GitHub and Join Discord community
- **Terminal Aesthetic**: Scanline effects, monospace fonts, and glow animations
- **Mobile Optimized**: Fully responsive with accessible reduced-motion support
- **Self-Contained**: All styles inline, no external CSS or JavaScript files

## Local Development

Simply open `index.html` in your browser, or run a local web server:

```bash
# Using Python
python3 -m http.server 8080

# Using Node.js
npx http-server -p 8080
```

Then visit `http://localhost:8080` in your browser.

## Project Structure

```
.
├── index.html          # Single-page website (self-contained)
├── favicon.ico         # Browser favicon
├── images/             # Project images
├── LICENSE             # MIT License
└── README.md           # This file
```

## Technologies

- Pure HTML5 (single file)
- Inline CSS3 (custom properties, Flexbox, Grid)
- No JavaScript required
- Mobile-first responsive design
- Accessible (reduced-motion support)

## WARLOCK Project

This website showcases WARLOCK - a helmet-mounted AR system with TAK integration:
- Multi-camera system (2x IMX462 low-light + FLIR Lepton 3.5 thermal)
- Real-time AI object detection (YOLO11 on Hailo-8L)
- TAK server integration for waypoint overlay
- ~$814 total build cost
- Open source hardware and software

View the full project: [github.com/preparedcitizencorps/warlock](https://github.com/preparedcitizencorps/warlock)

## Contributing

Contributions welcome! Visit our [GitHub organization](https://github.com/preparedcitizencorps) or join the [Discord](https://discord.gg/uFMEug4Bb9).

## Community

- **GitHub**: [github.com/preparedcitizencorps](https://github.com/preparedcitizencorps)
- **Discord**: [discord.gg/uFMEug4Bb9](https://discord.gg/uFMEug4Bb9)
- **Email**: contact@preparedcitizencorps.com

## License

MIT License - See individual project repositories for specific licensing.

---

**WARLOCK Status**: Phase 1 - Core System Development

> STAY_PREPARED _
