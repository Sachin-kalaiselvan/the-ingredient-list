import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        brand: ['DM Serif Display', 'serif'],
        body: ['Inter', 'sans-serif'],
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: '#ffffff',
        foreground: '#000000',
        primary: '#000000',
        'primary-foreground': '#ffffff',
        secondary: '#f5f5f5',
        'secondary-foreground': '#000000',
        muted: '#f5f5f5',
        'muted-foreground': '#666666',
        accent: '#3b82f6',
        'accent-foreground': '#ffffff',
        destructive: '#ef4444',
        'destructive-foreground': '#ffffff',
        border: '#e5e5e5',
        input: '#ffffff',
        ring: '#000000',
        card: '#ffffff',
        popover: '#ffffff',
        'popover-foreground': '#000000',
      },
      backgroundColor: {
        card: '#ffffff',
        background: '#ffffff',
        gradient: {
          card: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
        },
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #ffffff 0%, #fafafa 100%)',
        'gradient-warm': 'linear-gradient(135deg, #fefdfb 0%, #faf8f3 100%)',
        'gradient-brand': 'linear-gradient(135deg, #000000 0%, #333333 100%)',
        'gradient-to-r': 'linear-gradient(90deg, var(--tw-gradient-stops))',
        'gradient-to-br': 'linear-gradient(135deg, var(--tw-gradient-stops))',
        'gradient-card': 'linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(245,245,245,0.3) 100%)',
      },
      textGradient: {
        'gradient-brand': 'linear-gradient(135deg, #000000 0%, #333333 100%)',
      },
      gradientColorStops: {
        primary: '#000000',
        secondary: '#333333',
        orange: '#ff6b35',
      },
      boxShadow: {
        card: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        soft: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        glow: '0 0 20px -2px rgba(0, 0, 0, 0.1)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        in: 'fadeIn 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          from: {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      spacing: {
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      borderWidth: {
        '1': '1px',
      },
      opacity: {
        '5': '0.05',
        '10': '0.1',
        '15': '0.15',
      },
    },
  },
  plugins: [
    // Custom gradient text plugin
    function ({ addUtilities }) {
      addUtilities({
        '.text-gradient-brand': {
          'background': 'linear-gradient(135deg, #000000 0%, #333333 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
          'color': 'transparent',
        },
        '.animate-in': {
          animation: 'fadeIn 0.3s ease-in-out',
        },
      })
    },
  ],
}

export default config
