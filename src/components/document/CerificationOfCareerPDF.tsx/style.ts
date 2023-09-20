import { Font } from "@react-pdf/renderer"

export const FontNSPDF = Font.register({
    family: 'NanumSquare',
    fonts: [
        {src: '/fonts/NanumSquareEB.ttf', fontWeight: 'ultrabold'},
        {src: '/fonts/NanumSquareB.ttf', fontWeight: 'bold'},
        {src: '/fonts/NanumSquareR.ttf', fontWeight: 'normal'},
        {src: '/fonts/NanumSquareL.ttf', fontWeight: 'light'},
    ]
})

export const FontNMPDF = Font.register({
    family: 'NanumMyeongjo',
    fonts: [
        {src: '/fonts/NanumMyeongjo.ttf', fontWeight: 'normal'},
        {src: '/fonts/NanumMyeongjoBold.ttf', fontWeight: 'bold'},
        {src: '/fonts/NanumMyeongjoExtraBold.ttf', fontWeight: 'ultrabold'},
    ]
})