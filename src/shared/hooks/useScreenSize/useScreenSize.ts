import { useBreakpointValue } from "@chakra-ui/react";
import { useMemo } from "react";

type ScreenSize = 'mobile' | 'tablet' | 'small-laptop' | 'laptop' | 'desktop';

export const useScreenSize = () => {
    const screenSizeStatus = useBreakpointValue<ScreenSize>({ base: 'mobile', md: 'tablet', lg: 'small-laptop', xl: 'laptop', xxl: 'desktop' });

    const { isMobile, isTablet, isSmallLaptop, isLaptop, isDesktop } = useMemo(() => ({
        isMobile: screenSizeStatus === 'mobile',
        isTablet: screenSizeStatus === 'tablet',
        isSmallLaptop: screenSizeStatus === 'small-laptop',
        isLaptop: screenSizeStatus === 'laptop',
        isDesktop: screenSizeStatus === 'desktop',
    }), [screenSizeStatus]);

    return { screenSizeStatus, isMobile, isDesktop, isLaptop, isTablet, isSmallLaptop };
};