import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        clinical: {
          950: '#070a11', // Obsidian abyss background
          900: '#0f172a', // Deep slate surfaces
          850: '#152035', // Elevated cards
          800: '#1e293b', // Subtle borders
          700: '#334155',
          600: '#475569',
          500: '#64748b',
          400: '#94a3b8',
          300: '#cbd5e1',
          200: '#e2e8f0',
          100: '#f1f5f9',
          50:  '#f8fafc',
        },
        resus: {
          red: {
            DEFAULT: '#ef4444',
            light: '#f87171',
            dark: '#dc2626',
            bg: 'rgba(239, 68, 68, 0.1)',
          },
          cyan: {
            DEFAULT: '#06b6d4',
            light: '#22d3ee',
            dark: '#0891b2',
            bg: 'rgba(6, 182, 212, 0.1)',
          },
          emerald: {
            DEFAULT: '#10b981',
            light: '#34d399',
            dark: '#059669',
            bg: 'rgba(16, 185, 129, 0.1)',
          },
          amber: {
            DEFAULT: '#f59e0b',
            light: '#fbbf24',
            dark: '#d97706',
            bg: 'rgba(245, 158, 11, 0.1)',
          },
          purple: {
            DEFAULT: '#8b5cf6',
            light: '#a78bfa',
            dark: '#7c3aed',
            bg: 'rgba(139, 92, 246, 0.1)',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'Geist', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'glow-red': '0 0 20px -5px rgba(239, 68, 68, 0.3)',
        'glow-cyan': '0 0 20px -5px rgba(6, 182, 212, 0.3)',
        'glow-emerald': '0 0 20px -5px rgba(16, 185, 129, 0.3)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'inherit',
            a: {
              color: theme('colors.resus.cyan.DEFAULT'),
              '&:hover': {
                color: theme('colors.resus.cyan.light'),
              },
              textDecoration: 'none',
              fontWeight: '500',
            },
            code: {
              color: theme('colors.resus.cyan.light'),
              backgroundColor: 'rgba(6, 182, 212, 0.1)',
              paddingLeft: '0.25rem',
              paddingRight: '0.25rem',
              paddingTop: '0.125rem',
              paddingBottom: '0.125rem',
              borderRadius: '0.25rem',
              fontWeight: '400',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            table: {
              width: '100%',
              marginTop: '1.5em',
              marginBottom: '1.5em',
              fontSize: '0.925em',
              borderCollapse: 'collapse',
            },
            'thead th': {
              borderBottomWidth: '2px',
              borderBottomColor: theme('colors.clinical.700'),
              paddingLeft: '0.75rem',
              paddingRight: '0.75rem',
              paddingTop: '0.5rem',
              paddingBottom: '0.5rem',
            },
            'tbody td': {
              borderBottomWidth: '1px',
              borderBottomColor: theme('colors.clinical.800'),
              paddingLeft: '0.75rem',
              paddingRight: '0.75rem',
              paddingTop: '0.5rem',
              paddingBottom: '0.5rem',
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
