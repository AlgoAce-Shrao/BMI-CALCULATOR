# BMI Calculator 📊

A modern, responsive Body Mass Index (BMI) calculator web application with real-time validation, beautiful glassmorphism design, and comprehensive BMI guidance. Built with vanilla HTML, CSS, and JavaScript for optimal performance and accessibility.

## ✨ Features

- **Real-Time BMI Calculation**: Instant BMI computation with precise results (2 decimal places)
- **Input Validation**: Comprehensive validation for negative values, empty fields, and non-numeric inputs
- **Modern UI Design**: Glassmorphism effects with gradient backgrounds and smooth animations
- **Responsive Layout**: Mobile-first design that works seamlessly across all devices
- **BMI Guide**: Built-in weight category guide for health awareness
- **Form Prevention**: Prevents page reload on form submission for better UX
- **Accessibility**: Proper form labels and semantic HTML structure

## 🌐 Live Demo

**[View Live Demo](https://bmi-calculator-phi-topaz.vercel.app/)**

Try the BMI Calculator live! Click the link above to access the deployed application and calculate your BMI instantly with our beautiful, interactive interface.

## 🎯 BMI Categories

| Category | BMI Range | Health Status |
|----------|-----------|---------------|
| Underweight | < 18.6 | Below normal weight |
| Normal | 18.6 - 24.9 | Healthy weight range |
| Overweight | > 24.9 | Above normal weight |

## 🚀 Demo

1. Enter your height in meters (e.g., 1.75)
2. Enter your weight in kilograms (e.g., 70)
3. Click "Calculate" to get your BMI
4. View your result with the built-in health guide

## 📁 Project Structure

```
bmi-calculator/
├── index.html              # Main HTML file
├── style.css               # Stylesheet with glassmorphism design
├── script.js               # JavaScript functionality
└── README.md               # This file
```

**Note**: There's a mismatch in file references that needs to be corrected:
- HTML references `bmi.css` and `bmi.js`
- Actual files are `style.css` and `script.js`

## 🛠️ Installation & Usage

### Option 1: Direct Usage
1. Download all files (`index.html`, `style.css`, `script.js`)
2. Update HTML file references:
   ```html
   <link rel="stylesheet" href="style.css" />
   <script src="script.js"></script>
   ```
3. Open `index.html` in your web browser
4. Start calculating BMI values

### Option 2: Clone Repository
```bash
git clone <repository-url>
cd bmi-calculator
# Fix file references in index.html if needed
open index.html
```

### Option 3: Live Server (Recommended for Development)
```bash
# Using VS Code Live Server extension
# or any local server setup
python -m http.server 8000
# Navigate to http://localhost:8000
```

## 💻 Technical Details

### HTML Structure
- **Semantic Forms**: Proper form structure with labels and input associations
- **Accessibility**: Screen reader friendly with proper ARIA attributes
- **Validation**: Client-side validation with user-friendly error messages
- **Responsive Meta**: Viewport meta tag for mobile optimization

### CSS Features
- **Glassmorphism Design**: Modern glass-like effects with backdrop filters
- **Gradient Backgrounds**: Beautiful multi-layer gradient backgrounds
- **Smooth Animations**: CSS transitions for hover and focus states
- **Flexbox Layout**: Modern layout system for perfect centering
- **Mobile-First**: Responsive design starting from mobile breakpoints
- **Interactive Elements**: Hover effects and focus states for better UX

### JavaScript Functionality
- **Event Handling**: Form submission prevention and custom handling
- **Input Validation**: Comprehensive validation for all edge cases
- **Mathematical Precision**: BMI calculation with proper decimal formatting
- **DOM Manipulation**: Direct DOM updates for real-time results
- **Error Handling**: User-friendly error messages for invalid inputs

## 📱 Browser Compatibility

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ✅ Supports backdrop-filter (modern browsers)

## 🎯 Use Cases

- **Personal Health Tracking**: Individual BMI monitoring and health awareness
- **Fitness Applications**: Integration into larger health and fitness platforms
- **Medical Websites**: Quick BMI calculation tool for healthcare sites
- **Educational Tools**: Teaching BMI concepts in health education
- **Portfolio Projects**: Demonstration of form handling and validation skills

## 🔧 Customization

### Adding More BMI Categories
Extend the guide section in HTML:
```html
<div class="guide">
  <h3>Detailed BMI Weight Guide</h3>
  <p>Severely Underweight = Less than 16</p>
  <p>Underweight = 16.0 - 18.4</p>
  <p>Normal Weight = 18.5 - 24.9</p>
  <p>Overweight = 25.0 - 29.9</p>
  <p>Obese Class I = 30.0 - 34.9</p>
  <p>Obese Class II = 35.0 - 39.9</p>
  <p>Obese Class III = 40.0 and above</p>
</div>
```

### Enhanced Validation
Add more sophisticated validation in JavaScript:
```javascript
function validateInputs(height, weight) {
  if (height <= 0 || height > 3) {
    return "Height must be between 0 and 3 meters";
  }
  if (weight <= 0 || weight > 1000) {
    return "Weight must be between 0 and 1000 kg";
  }
  return null;
}
```

### Color Theme Customization
Update CSS variables for different themes:
```css
:root {
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --glass-bg: rgba(255, 255, 255, 0.1);
  --text-color: #ffffff;
  --input-bg: rgba(255, 255, 255, 0.9);
}
```

### Unit Conversion Support
Add imperial units support:
```javascript
function convertToMetric(feet, inches, pounds) {
  const heightInMeters = (feet * 12 + inches) * 0.0254;
  const weightInKg = pounds * 0.453592;
  return { height: heightInMeters, weight: weightInKg };
}
```

## 🚀 Performance Features

- **Lightweight**: < 15KB total file size
- **No Dependencies**: Pure vanilla JavaScript implementation
- **Fast Rendering**: Optimized CSS for smooth animations
- **Efficient DOM Updates**: Minimal DOM manipulation for better performance
- **Mobile Optimized**: Touch-friendly interface with proper sizing

## 🔍 Input Validation

The calculator includes comprehensive validation for:
- **Empty Fields**: Prompts user to fill required fields
- **Negative Values**: Prevents negative height/weight inputs
- **Non-Numeric Input**: Handles text input gracefully
- **Zero Values**: Prevents division by zero errors
- **Decimal Precision**: Ensures proper decimal handling

## 🎨 Design Principles

- **Modern Aesthetics**: Glassmorphism design trend with subtle transparency
- **User-Centric**: Clear labels, intuitive flow, and immediate feedback
- **Accessibility First**: Proper contrast ratios and keyboard navigation
- **Mobile Responsive**: Touch-friendly buttons and optimal spacing
- **Visual Hierarchy**: Clear distinction between input, action, and result areas

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/imperial-units`)
3. Make your changes
4. Test across different browsers and screen sizes
5. Commit your changes (`git commit -am 'Add imperial units support'`)
6. Push to the branch (`git push origin feature/imperial-units`)
7. Create a Pull Request

### Contribution Ideas
- Imperial units support (feet/inches, pounds)
- BMI history tracking
- Health recommendations based on BMI
- BMI trends visualization
- Export results functionality
- Multi-language support
- Dark/light theme toggle

## 🐛 Known Issues & Fixes

### File Reference Mismatch
**Issue**: HTML file references `bmi.css` and `bmi.js` but actual files are `style.css` and `script.js`

**Fix**: Update the HTML file:
```html
<!-- Change these lines in index.html -->
<link rel="stylesheet" href="style.css" />
<script src="script.js"></script>
```

## 📊 Technical Specifications

- **BMI Formula**: BMI = weight(kg) / height(m)²
- **Decimal Precision**: 2 decimal places using `toFixed(2)`
- **Input Types**: Accepts both integer and decimal values
- **Validation**: Real-time validation on form submission
- **Response Time**: Instant calculation (< 1ms)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🔮 Future Enhancements

- [ ] Imperial units support (feet/inches, pounds)
- [ ] BMI calculation history
- [ ] Health recommendations based on results
- [ ] Data visualization with charts
- [ ] Body fat percentage calculator
- [ ] Ideal weight calculator
- [ ] Export results to PDF
- [ ] Progressive Web App (PWA) features

## 📧 Support

For questions, issues, or suggestions, please open an issue in the repository or contact the maintainer.

---

**Made with ❤️ using vanilla HTML, CSS, and JavaScript • Promoting health awareness through technology**
