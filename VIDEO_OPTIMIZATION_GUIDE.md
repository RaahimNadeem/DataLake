# Video Optimization Guide for Hero Sections

## Current Issues with Your Setup

1. **Large file size**: 5.4MB is too large for a hero video
2. **Missing poster image**: No fallback while video loads
3. **Single format**: Only WebM, no MP4 fallback
4. **No CDN**: Serving from your own server

## Industry Standards for Hero Videos

### File Specifications
- **Target size**: 2-4MB maximum
- **Duration**: 10-30 seconds (looped)
- **Resolution**: 1920x1080 max, 1280x720 often sufficient
- **Frame rate**: 24-30 fps
- **Codec**: H.264 (MP4) + WebM for modern browsers

### Loading Strategy
1. **Poster image**: Show immediately while video loads
2. **Lazy loading**: Only load video when in viewport
3. **Progressive loading**: Start with metadata, then full video
4. **Multiple formats**: WebM + MP4 for browser compatibility

## CDN Solutions

### 1. **Cloudflare (Recommended)**
```bash
# Upload to Cloudflare R2 or use their CDN
# Benefits: Global edge network, automatic optimization
```

### 2. **AWS CloudFront**
```bash
# Upload to S3, serve via CloudFront
# Benefits: High performance, cost-effective
```

### 3. **Vercel Edge Network**
```bash
# Your videos are already on Vercel's edge network
# But consider dedicated video CDN for better performance
```

## Implementation Steps

### Step 1: Optimize Video Files
```bash
# Using FFmpeg to create optimized versions
ffmpeg -i Hero.webm -c:v libx264 -crf 23 -preset fast -c:a aac -b:a 128k Hero.mp4
ffmpeg -i Hero.webm -c:v libvpx-vp9 -crf 30 -b:v 0 -c:a libopus Hero-optimized.webm
```

### Step 2: Create Poster Image
```bash
# Extract first frame as poster
ffmpeg -i Hero.webm -vframes 1 -q:v 2 hero-poster.jpg
```

### Step 3: Implement CDN
```javascript
// Example with Cloudflare CDN
const videoSources = [
  { src: 'https://cdn.yourdomain.com/videos/Hero-optimized.webm', type: 'video/webm' },
  { src: 'https://cdn.yourdomain.com/videos/Hero.mp4', type: 'video/mp4' }
];
```

## Performance Metrics to Target

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.5s
- **Video load time**: < 2s on 3G connection

## Recommended CDN Services

1. **Cloudflare** - Best overall, includes video optimization
2. **Bunny.net** - Specialized video CDN
3. **AWS CloudFront** - Enterprise-grade
4. **Vercel Edge Network** - Already included with your hosting

## Quick Wins (No CDN Required)

1. **Compress existing video**: Reduce from 5.4MB to ~2MB
2. **Add poster image**: Immediate visual feedback
3. **Implement lazy loading**: Only load when needed
4. **Use multiple formats**: Better browser compatibility

## Next Steps

1. Optimize your current video files
2. Create a poster image
3. Test with different CDN providers
4. Monitor Core Web Vitals
5. A/B test different loading strategies 