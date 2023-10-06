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

export const PdfStyle = StyleSheet.create({
    body:{
        margin: '30mm 15mm',
        fontFamily: 'NanumSquare',
    },
    title:{
        fontWeight: 'ultrabold',
        fontSize: '24pt',
        letterSpacing: '20pt',
        height: '28mm',
        textAlign: 'center',
        paddingTop: '10mm'
    },
    head:{
        fontFamily: 'NanumSquare',
        fontWeight: 'ultrabold',
        fontSize: '28pt',
        letterSpacing: '10pt',
    },
    outerTable:{
        borderWidth: '0.5mm',
        borderColor: 'black',
        borderStyle: 'solid',
        fontFamily: 'NanumMyeongjo',
        fontSize: '13pt',
    },
    rowLV:{
        width: '20mm',
        gap: '2mm'
    },
    innerBorder:{
        border:'0.1mm black solid',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    rowLeft:{
        border: '0.1mm black solid',
        flex: '1 0 0'
    },
    tail:{
        fontFamily: 'NanumMyeongjo',
        lineHeight: '3pt',
        textAlign: 'center',
        marginTop: '48pt'
    },
    flexRow:{
        display: 'flex',
        flexDirection: 'row',
    },
    flexCol:{
        display: 'flex',
        flexDirection: 'column',
    },
    stemp:{
        width: '30mm',
        height: '30mm',
        left: '130.68mm',
        top: '16mm',
        zIndex: 2,
        position: 'absolute',
    }
})