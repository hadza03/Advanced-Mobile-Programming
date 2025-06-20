import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    {
      id: 1,
      name: 'ECLER eMOTUS',
      price: 159.99,
      image: require('../../assets/1.png'),
      images: [
        require('../../assets/1.png'),
        require('../../assets/2.png'),
        require('../../assets/3.png'),
      ],
      description: 'eMOTUS5O16 is a low impedance (16 ohm) loudspeaker cabinet, 5” woofer + 1” coaxial tweeter with eMOTUS unique design. Ready for indoor and outdoor applications, thanks to its aluminium grill and UV protection treatment (IP65-rated). A professional and compact loudspeaker, cost-effective and with a unique design that will easily fit in a massive number of applications: theme parks, gardens, nature parks and urban spaces, leisure, health and sport centres, residential buildings, outdoor areas, etc. Available in black and white colour. Wall mount accessories and safety sling are included for an easy and secure installation.',
    },
    {
      id: 2,
      name: 'ECLER HADA-4B150',
      price: 399.99,
      image: require('../../assets/hada1.jpg'),
      images: [
        require('../../assets/hada1.jpg'),
        require('../../assets/hada2.jpg'),
      ],
      description: 'HADA-4B150 is a 4x125W digital amplifier that supports low and high impedance loads. The internal DSP, through the DSP Manager software, allows tailoring the input and output signal through parametric EQs, multi-band compressors, limiters, and delays and each configuration can be saved as a preset. In addition to the software option, input levels can be controlled via the front panel potentiometers, via remote controls using the rear panel GPI, or via a TCP/IP from third party control systems. All HADA series amplifiers include efficient thermal protection, DC protection, over current protection, and HF protection for total reliability in any kind of installation.',
    },
    {
      id: 3,
      name: 'ECLER eAMBIT',
      price: 169.99,
      image: '../../assets/ambit1.jpg',
      images: [
        '../../assets/ambit2.jpg',
        '../../assets/ambit3.jpg',
        
      ],
      description: 'AMBIT-16 is a compact 2-way coaxial loudspeaker cabinet with neutral and discreet design. It mounts a 6.5” woofer and a 1" tweeter and it is suitable for low and high impedance lines. AMBIT-16 is ready for indoor and outdoor applications, thanks to its aluminium grill and UV protection treatment (IP54-rated). Wall mount accessories and safety sling are included for an easy and secure installation.',
    },
  ],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
