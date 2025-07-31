# WET by Lou - Custom Shopify Theme

## 🔥 Glamorous Hair Care Brand Theme

This is a custom Shopify theme designed specifically for **WET by Lou**, featuring a luxury rose gold metallic aesthetic inspired by Kylie Cosmetics with refined elegance.

## ✨ Theme Features

### 🎨 **Visual Design**
- **Rose Gold Metallic Color Palette** - Warm nude tones with metallic accents
- **Glass Morphism Effects** - Backdrop blur with subtle transparency
- **Kylie-Inspired Bold Typography** - Dramatic headings with metallic gradients
- **Floating Animations** - Product showcases with glow effects
- **Interactive Hover States** - Shine effects and smooth transitions

### 🛍️ **E-commerce Features**
- **Product Showcase** - Glamorous product cards with overlay actions
- **Collection Pages** - Filtering, sorting, and pagination
- **Product Pages** - Variant selection, quantity controls, image gallery
- **Shopping Cart** - Add to cart with visual feedback
- **Search Functionality** - Live search with product suggestions
- **Newsletter Signup** - Email capture with success animations

### 📱 **Responsive Design**
- **Mobile-First Approach** - Optimized for all device sizes
- **Touch-Friendly** - Large buttons and easy navigation
- **Performance Optimized** - Fast loading with optimized assets

## 🚀 Installation Instructions

### **Option 1: Upload Theme Files**

1. **Compress the theme folder:**
   ```bash
   zip -r wet-by-lou-theme.zip shopify-theme/
   ```

2. **Upload to Shopify:**
   - Go to your Shopify admin
   - Navigate to **Online Store > Themes**
   - Click **Upload theme**
   - Select the zip file
   - Click **Upload**

3. **Customize the theme:**
   - Click **Customize** on the uploaded theme
   - Update colors, fonts, and images in the theme editor

### **Option 2: Manual Installation**

1. **Access your theme files:**
   - Go to **Online Store > Themes**
   - Click **Actions > Edit code** on your current theme
   - Or create a new theme from scratch

2. **Upload files:**
   - Replace/add files from the `shopify-theme` folder
   - Upload assets, templates, sections, and config files
   - Ensure all file paths match the Shopify theme structure

## 🎯 **Customization Guide**

### **Theme Settings**
Access **Customize > Theme settings** to modify:

- **Colors**: Brand colors, backgrounds, text colors
- **Typography**: Font families and sizing
- **Layout**: Page width and spacing
- **Product Cards**: Style, borders, shadows
- **Brand Assets**: Logo, hero images, about images

### **Key Customizable Elements**

#### **Homepage Sections:**
- Hero section with product showcase
- Collection tabs (Volume Line, Repair Line)
- Newsletter signup
- Featured products grid

#### **Product Pages:**
- Image gallery with thumbnails
- Variant selection (size, scent, etc.)
- Add to cart with quantity controls
- Product features and benefits

#### **Collection Pages:**
- Product filtering and sorting
- Grid layout with product cards
- Pagination for large collections

### **Brand Customization**

#### **Colors (Theme Settings > Colors):**
```css
Primary: #d4a574 (Rose Gold)
Secondary: #b8925f (Dark Rose Gold)  
Accent: #e6c194 (Light Rose Gold)
Background: #faf8f6 (Warm White)
Text: #2c1810 (Rich Brown)
```

#### **Upload Your Images:**
- **Logo**: Header and footer logo
- **Hero Image**: Main product bottle image
- **About Images**: Brand story visuals
- **Product Images**: High-quality product photos

### **Menu Setup**

1. **Create menus:**
   - Go to **Navigation**
   - Create "Main Menu" with: The Line-Up, By Lou, Scent Story, Shop, Contact
   - Create "Footer Menu" with: Customer service links

2. **Link pages:**
   - Create pages for About, Contact, etc.
   - Link menu items to appropriate pages/collections

## 🛠️ **Development**

### **File Structure**
```
shopify-theme/
├── assets/
│   ├── wet-glamour.css       # Main theme styles
│   └── wet-glamour.js        # Theme JavaScript
├── config/
│   ├── settings_schema.json  # Theme customization options
│   └── settings_data.json    # Default theme settings
├── layout/
│   └── theme.liquid          # Main layout template
├── sections/
│   ├── header.liquid         # Site header
│   └── footer.liquid         # Site footer
└── templates/
    ├── index.liquid          # Homepage
    ├── product.liquid        # Product pages
    └── collection.liquid     # Collection pages
```

### **Key Technologies**
- **Shopify Liquid** - Templating language
- **CSS Custom Properties** - Dynamic theming
- **Vanilla JavaScript** - Interactive functionality
- **CSS Grid & Flexbox** - Responsive layouts
- **CSS Animations** - Smooth transitions and effects

## 🎨 **Design System**

### **Typography Scale**
- **Hero Large**: 64px, Weight 800
- **Hero Medium**: 48px, Weight 700  
- **Heading 1**: 36px, Weight 700
- **Heading 2**: 32px, Weight 600
- **Body Large**: 20px, Weight 400
- **Body Regular**: 16px, Weight 400

### **Spacing System**
- **Section Padding**: 140px vertical
- **Container Max Width**: 1400px
- **Grid Gaps**: 40px standard, 80px large
- **Border Radius**: 24px for cards, 50px for buttons

### **Animation Effects**
- **Fade In Up**: 0.8s ease forwards
- **Glow Pulse**: 2s infinite alternate
- **Hover Lift**: Transform translateY(-8px)
- **Shine Effect**: Sweeping light animation

## 📞 **Support**

### **Common Customizations**

#### **Change Brand Colors:**
1. Go to **Customize > Theme settings > Colors**
2. Update Primary, Secondary, and Accent colors
3. Colors automatically apply to gradients and effects

#### **Add New Products:**
1. Create products in **Products** admin
2. Add to collections (Volume Line, Repair Line)
3. Upload high-quality images
4. Add product tags for filtering

#### **Update Content:**
1. **Hero Section**: Customize > Sections > Hero
2. **About Story**: Update page content
3. **Footer**: Customize > Sections > Footer

#### **Social Media:**
1. **Footer Settings**: Add Instagram, TikTok, YouTube links
2. **Icons**: Automatically display based on links provided

### **Performance Tips**
- **Optimize Images**: Use WebP format, appropriate sizing
- **Minimize Apps**: Only install necessary Shopify apps
- **Test Speed**: Use Shopify's Online Store > Preferences > Speed

## 🚀 **Going Live**

1. **Test Everything:**
   - All pages load correctly
   - Shopping cart functions
   - Mobile responsiveness
   - Contact forms work

2. **Set as Active Theme:**
   - Go to **Online Store > Themes**
   - Click **Actions > Publish** on your custom theme

3. **Final Checks:**
   - Update all placeholder content
   - Test checkout process
   - Verify payment methods
   - Check shipping settings

## 🎉 **Conclusion**

Your WET by Lou Shopify theme is now ready to launch! This custom theme provides a luxury shopping experience that matches your brand's sophisticated aesthetic while offering all the e-commerce functionality needed for a successful hair care business.

**Remember**: This theme is specifically designed for WET by Lou's brand identity and can be further customized as your business grows.

---

*Built with 💎 for luxury hair care excellence*