import { Font, StyleSheet } from "@react-pdf/renderer"

export const FontNSPDF = Font.register({
    family: 'NanumSquare',
    fonts: [
        {src: '/fonts/NanumSquare/NanumSquareEB.ttf', fontWeight: 'ultrabold'},
        {src: '/fonts/NanumSquare/NanumSquareB.ttf', fontWeight: 'bold'},
        {src: '/fonts/NanumSquare/NanumSquareR.ttf', fontWeight: 'normal'},
        {src: '/fonts/NanumSquare/NanumSquareL.ttf', fontWeight: 'light'},
    ]
})

export const FontNMPDF = Font.register({
    family: 'NanumMyeongjo',
    fonts: [
        {src: '/fonts/NanumMyeongjo/NanumMyeongjo.ttf', fontWeight: 'normal'},
        {src: '/fonts/NanumMyeongjo/NanumMyeongjoBold.ttf', fontWeight: 'bold'},
        {src: '/fonts/NanumMyeongjo/NanumMyeongjoExtraBold.ttf', fontWeight: 'ultrabold'},
    ]
})