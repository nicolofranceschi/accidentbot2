import { motion } from "framer-motion";
import { LogoSvg } from "./styled";

const pathProps = {
  variants: {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      opacity: 1,
      pathLength: 1,
    }
  },
  initial: "hidden",
  animate: "visible",
  transition: {
    default: { duration: 2, ease: "easeInOut" },
    fill: { duration: 2, ease: [1, 0, 0.8, 1] }
  }
}

export  const Loading = () => (
  <LogoSvg width="201" height="185" viewBox="0 0 201 185" fill="white" xmlns="http://www.w3.org/2000/svg">
    <motion.path {...pathProps} d="M37.4734 110.73C37.9645 112.828 39.0078 114.762 40.4988 116.338C41.9898 117.914 43.8759 119.077 45.9681 119.71L47.2413 125.212H47.1352V139.125H160.304V125.212H66.1122C66.205 124.57 66.1883 123.916 66.0627 123.279L64.6763 117.275L137.932 100.886L139.318 106.89C139.688 108.482 140.685 109.866 142.09 110.736C143.496 111.606 145.196 111.891 146.816 111.53L152.92 110.159C153.722 109.98 154.481 109.647 155.152 109.18C155.823 108.712 156.395 108.119 156.833 107.434C157.271 106.749 157.567 105.986 157.706 105.189C157.844 104.391 157.82 103.574 157.637 102.786L155.862 95.1128C159.017 92.219 160.601 87.8366 159.575 83.4054L155.402 65.3887C154.896 63.2182 153.797 61.2245 152.224 59.6225C150.651 58.0205 148.664 56.8707 146.476 56.2969L131.983 32.7987C129.846 29.3463 126.661 26.641 122.876 25.0646C119.092 23.4883 114.9 23.1204 110.892 24.013L55.2409 36.4647C51.2282 37.3586 47.6037 39.4727 44.8817 42.5069C42.1597 45.5411 40.4783 49.3413 40.0763 53.3683L37.339 80.7203C35.6222 82.1701 34.3396 84.0528 33.6293 86.1658C32.9189 88.2788 32.8076 90.5423 33.3074 92.7129L37.4734 110.73ZM58.834 105.944C57.6316 106.213 56.387 106.247 55.1713 106.044C53.9556 105.84 52.7925 105.403 51.7486 104.757C50.7046 104.112 49.8001 103.27 49.0868 102.281C48.3736 101.291 47.8654 100.173 47.5914 98.9909C47.3174 97.8084 47.2829 96.5843 47.4899 95.3887C47.6969 94.193 48.1413 93.0492 48.7977 92.0225C49.4542 90.9957 50.3099 90.1062 51.3159 89.4047C52.3219 88.7032 53.4585 88.2034 54.6609 87.934C57.0892 87.3897 59.638 87.8165 61.7463 89.1204C63.8547 90.4243 65.3501 92.4985 65.9035 94.8867C66.4569 97.275 66.023 99.7816 64.6972 101.855C63.3714 103.929 61.2623 105.399 58.834 105.944ZM138.208 88.1913C136.985 88.522 135.706 88.6056 134.45 88.4371C133.193 88.2687 131.984 87.8517 130.896 87.2113C129.807 86.5709 128.862 85.7203 128.117 84.7109C127.372 83.7014 126.842 82.5541 126.56 81.3379C126.278 80.1218 126.25 78.8621 126.476 77.6347C126.702 76.4074 127.179 75.2379 127.878 74.1967C128.576 73.1555 129.482 72.2642 130.54 71.5765C131.598 70.8888 132.787 70.4191 134.035 70.1955C136.415 69.769 138.871 70.2624 140.891 71.5728C142.91 72.8833 144.338 74.9097 144.876 77.2298C145.414 79.5498 145.021 81.9846 143.779 84.0267C142.536 86.0687 140.541 87.5606 138.208 88.1913ZM58.3743 50.0294L114.032 37.5707C115.147 37.3229 116.313 37.4252 117.367 37.8631C118.42 38.3011 119.307 39.0528 119.903 40.0124L131.113 58.189L127.11 59.0864L56.0543 74.9953L52.0368 75.8927L54.1516 54.7318C54.2655 53.6116 54.7344 52.5549 55.4921 51.7111C56.2499 50.8673 57.2581 50.279 58.3743 50.0294ZM149.022 13.9125L139.085 0L135.548 20.8687L153.231 48.6938L174.45 55.65L160.304 37.9881L174.45 31.4979L160.304 25.0077L174.45 0L149.022 13.9125Z" fill="white"/>
    <motion.path {...pathProps} d="M13.9453 179.605H6.24023L4.77539 184H0.102539L8.04199 162.672H12.1143L20.0977 184H15.4248L13.9453 179.605ZM7.42676 176.046H12.7588L10.0781 168.062L7.42676 176.046Z" fill="white"/>
    <motion.path {...pathProps} d="M38.5107 176.896C38.3447 179.19 37.4951 180.997 35.9619 182.315C34.4385 183.634 32.4268 184.293 29.9268 184.293C27.1924 184.293 25.0391 183.375 23.4668 181.539C21.9043 179.693 21.123 177.164 21.123 173.951V172.647C21.123 170.597 21.4844 168.79 22.207 167.228C22.9297 165.665 23.96 164.469 25.2979 163.639C26.6455 162.799 28.208 162.379 29.9854 162.379C32.4463 162.379 34.4287 163.038 35.9326 164.356C37.4365 165.675 38.3057 167.525 38.54 169.908H34.1455C34.0381 168.531 33.6523 167.535 32.9883 166.92C32.334 166.295 31.333 165.982 29.9854 165.982C28.5205 165.982 27.4219 166.51 26.6895 167.564C25.9668 168.609 25.5957 170.235 25.5762 172.442V174.054C25.5762 176.358 25.9229 178.043 26.6162 179.107C27.3193 180.172 28.4229 180.704 29.9268 180.704C31.2842 180.704 32.2949 180.396 32.959 179.781C33.6328 179.156 34.0186 178.194 34.1162 176.896H38.5107Z" fill="white"/>
    <motion.path {...pathProps} d="M58.1396 176.896C57.9736 179.19 57.124 180.997 55.5908 182.315C54.0674 183.634 52.0557 184.293 49.5557 184.293C46.8213 184.293 44.668 183.375 43.0957 181.539C41.5332 179.693 40.752 177.164 40.752 173.951V172.647C40.752 170.597 41.1133 168.79 41.8359 167.228C42.5586 165.665 43.5889 164.469 44.9268 163.639C46.2744 162.799 47.8369 162.379 49.6143 162.379C52.0752 162.379 54.0576 163.038 55.5615 164.356C57.0654 165.675 57.9346 167.525 58.1689 169.908H53.7744C53.667 168.531 53.2812 167.535 52.6172 166.92C51.9629 166.295 50.9619 165.982 49.6143 165.982C48.1494 165.982 47.0508 166.51 46.3184 167.564C45.5957 168.609 45.2246 170.235 45.2051 172.442V174.054C45.2051 176.358 45.5518 178.043 46.2451 179.107C46.9482 180.172 48.0518 180.704 49.5557 180.704C50.9131 180.704 51.9238 180.396 52.5879 179.781C53.2617 179.156 53.6475 178.194 53.7451 176.896H58.1396Z" fill="white"/>
    <motion.path {...pathProps} d="M65.6982 184H61.3037V162.672H65.6982V184Z" fill="white"/>
    <motion.path {...pathProps} d="M69.7852 184V162.672H76.3477C78.2227 162.672 79.8975 163.097 81.3721 163.946C82.8564 164.786 84.0137 165.987 84.8438 167.55C85.6738 169.103 86.0889 170.87 86.0889 172.853V173.834C86.0889 175.816 85.6787 177.579 84.8584 179.122C84.0479 180.665 82.9004 181.861 81.416 182.711C79.9316 183.561 78.2568 183.99 76.3916 184H69.7852ZM74.1797 166.231V180.47H76.3037C78.0225 180.47 79.3359 179.908 80.2441 178.785C81.1523 177.662 81.6162 176.056 81.6357 173.966V172.838C81.6357 170.67 81.1865 169.029 80.2881 167.916C79.3896 166.793 78.0762 166.231 76.3477 166.231H74.1797Z" fill="white"/>
    <motion.path {...pathProps} d="M102.129 174.757H93.6914V180.47H103.594V184H89.2969V162.672H103.564V166.231H93.6914V171.314H102.129V174.757Z" fill="white"/>
    <motion.path {...pathProps} d="M123.516 184H119.121L110.566 169.967V184H106.172V162.672H110.566L119.136 176.734V162.672H123.516V184Z" fill="white"/>
    <motion.path {...pathProps} d="M142.969 166.231H136.436V184H132.041V166.231H125.596V162.672H142.969V166.231Z" fill="white"/>
    <motion.path {...pathProps} d="M145.488 184V162.672H152.959C155.547 162.672 157.51 163.17 158.848 164.166C160.186 165.152 160.854 166.603 160.854 168.517C160.854 169.562 160.586 170.484 160.049 171.285C159.512 172.076 158.765 172.657 157.808 173.028C158.901 173.302 159.761 173.854 160.386 174.684C161.021 175.514 161.338 176.529 161.338 177.73C161.338 179.781 160.684 181.334 159.375 182.389C158.066 183.443 156.201 183.98 153.779 184H145.488ZM149.883 174.713V180.47H153.647C154.683 180.47 155.488 180.226 156.064 179.737C156.65 179.239 156.943 178.556 156.943 177.687C156.943 175.733 155.933 174.742 153.911 174.713H149.883ZM149.883 171.607H153.135C155.352 171.568 156.46 170.685 156.46 168.956C156.46 167.989 156.177 167.296 155.61 166.876C155.054 166.446 154.17 166.231 152.959 166.231H149.883V171.607Z" fill="white"/>
    <motion.path {...pathProps} d="M182.168 173.819C182.168 175.919 181.797 177.76 181.055 179.342C180.312 180.924 179.248 182.145 177.861 183.004C176.484 183.863 174.902 184.293 173.115 184.293C171.348 184.293 169.771 183.868 168.384 183.019C166.997 182.169 165.923 180.958 165.161 179.386C164.399 177.804 164.014 175.987 164.004 173.937V172.882C164.004 170.782 164.38 168.937 165.132 167.345C165.894 165.743 166.963 164.518 168.34 163.668C169.727 162.809 171.309 162.379 173.086 162.379C174.863 162.379 176.44 162.809 177.817 163.668C179.204 164.518 180.273 165.743 181.025 167.345C181.787 168.937 182.168 170.777 182.168 172.867V173.819ZM177.715 172.853C177.715 170.616 177.314 168.917 176.514 167.755C175.713 166.593 174.57 166.012 173.086 166.012C171.611 166.012 170.474 166.588 169.673 167.74C168.872 168.883 168.467 170.562 168.457 172.779V173.819C168.457 175.997 168.857 177.687 169.658 178.888C170.459 180.089 171.611 180.689 173.115 180.689C174.59 180.689 175.723 180.113 176.514 178.961C177.305 177.799 177.705 176.109 177.715 173.893V172.853Z" fill="white"/>
    <motion.path {...pathProps} d="M200.156 166.231H193.623V184H189.229V166.231H182.783V162.672H200.156V166.231Z" fill="white"/>
  </LogoSvg>
);
