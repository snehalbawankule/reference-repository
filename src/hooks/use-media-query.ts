import useMediaQueryMUI from "@mui/material/useMediaQuery";
function useMediaQuery() {
  const isMobile = useMediaQueryMUI("(max-width:767px)");
  const isTablet = useMediaQueryMUI("(min-width:768px)");
  const isDesktop = useMediaQueryMUI("(min-width:1024px)");
  return { isMobile, isTablet, isDesktop };
}
export default useMediaQuery;
