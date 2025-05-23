
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Enhanced vibrant color scheme
				navy: "#0A2463",
				lightblue: "#3E92CC",
				orange: "#FF8600",
				teal: "#1AC8ED",
				rose: "#FF5A5F",
				amber: "#FFB400",
				emerald: "#21D19F",
				coral: "#FF6B6B",
				purple: "#845EC2",
				magenta: "#D65DB1",
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in': {
					'0%': { 
						transform: 'translateX(-100%)',
						opacity: '0' 
					},
					'100%': { 
						transform: 'translateX(0)',
						opacity: '1' 
					}
				},
				'zoom-in': {
					'0%': { 
						transform: 'scale(0.95)',
						opacity: '0' 
					},
					'100%': { 
						transform: 'scale(1)',
						opacity: '1' 
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-in': 'slide-in 0.5s ease-out',
				'zoom-in': 'zoom-in 0.4s ease-out'
			},
			boxShadow: {
				'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
				'glow': '0 0 15px rgba(62, 146, 204, 0.5)',
				'card': '0 10px 30px -5px rgba(0, 0, 0, 0.1)',
				'btn': '0 4px 10px rgba(0, 0, 0, 0.15)'
			},
			backgroundImage: {
				'gradient-hero': 'linear-gradient(to right, rgba(10, 36, 99, 0.95), rgba(62, 146, 204, 0.9))',
				'gradient-cta': 'linear-gradient(to right, #FF8600, #FFB400)',
				'gradient-card': 'linear-gradient(to bottom, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.1))'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
