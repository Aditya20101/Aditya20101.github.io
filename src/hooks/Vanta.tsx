import { useEffect, useState, useRef } from 'react';
import GLOBE from 'vanta/dist/vanta.globe.min';
import HALO from 'vanta/dist/vanta.halo.min.js'
import WAVES from 'vanta/dist/vanta.waves.min.js'
import NET from 'vanta/dist/vanta.net.min.js'


{/* <script src="three.r134.min.js"></script>
<script src="vanta.net.min.js"></script>
<script>
VANTA.NET({
  el: "#your-element-selector",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0xff9a1e,
  backgroundColor: 0x0
})
</script> */}



export const useVantaGlobe = () => {
  const [vantaEffect, setVantaEffect] = useState<any>(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect && window.innerWidth >= 768) {
      setVantaEffect(
        NET({
          // el: myRef.current,
          // mouseControls: true,
          // touchControls: true,
          // gyroControls: false,
          // minHeight: 200.00,
          // minWidth: 200.00,
          // scale: 1.00,
          // scaleMobile: 1.00,
          // color: 0xff9a1e,
          // backgroundColor: 0x0
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0xa76200,
          backgroundColor: 0x0

        })
    
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return myRef;
};










// original

// export const useVantaGlobe = () => {
//   const [vantaEffect, setVantaEffect] = useState<any>(0);
//   const myRef = useRef(null);
//   useEffect(() => {
//     if (!vantaEffect && window.innerWidth >= 768) {
//       setVantaEffect(
//         WAVES({
//           el: myRef.current,
//           mouseControls: true,
//           touchControls: true,
//           gyroControls: false,
//           minHeight: 200.00,
//           minWidth: 200.00,
//           scale: 1.00,
//           scaleMobile: 1.00,
//           color: 0x0F0F12,

//         })
//         // GLOBE({
//         //   el: myRef.current,
//         //   mouseControls: true,
//         //   touchControls: true,
//         //   gyroControls: false,
//         //   minHeight: 200.0,
//         //   minWidth: 200.0,
//         //   scale: 1.0,
//         //   scaleMobile: 1.0,
//         //   color: 0x21c55d,
//         //   backgroundColor: 0x0F0F12,
//         // }),
//       );
//     }
//     return () => {
//       if (vantaEffect) vantaEffect.destroy();
//     };
//   }, [vantaEffect]);
//   return myRef;
// };
