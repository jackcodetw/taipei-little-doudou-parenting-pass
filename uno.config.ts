import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { presetScrollbarHide } from 'unocss-preset-scrollbar-hide'

export default defineConfig({
  shortcuts: [
    {
      'bg-base': 'bg-[#FFFDFB]',
      'color-base': 'text-[#333333]',
      'color-secondary': 'text-[#9C9EB9]',
      'color-annotation': 'text-[#6B7280]',
      'shadow-base': 'shadow-[0px_10px_30px_0px_rgba(112,136,210,.2)]',
      'rounded-base': 'rounded-[1.25rem]',
    },
  ],
  theme: {
    colors: {
      primary: '#F3B671',
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetWebFonts({
      fonts: {
        sans: 'Noto Sans TC',
        rubik: 'Rubik',
        roboto: 'Roboto',
      },
    }),
    presetScrollbarHide(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
