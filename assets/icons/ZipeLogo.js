import * as React from "react"
import Svg, { Path, Defs, RadialGradient, Stop } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={70}
    height={70}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    // {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M43.12 3.091c3.33 2.188 5.769 3.233 8.342 3.575 2 .265 4.525.942 5.61 1.503 3.333 1.725 5.61 5.425 6.287 10.22.595 4.216 1.668 6.612 4.27 9.54 1.827 2.058 2.845 6.613 2.153 9.644-.323 1.416-1.733 4.076-3.135 5.913-1.402 1.837-2.73 4.497-2.952 5.911a5305.12 5305.12 0 0 0-.784 5.025c-.532 3.417-5.438 8.248-8.938 8.8-1.445.228-3.671.575-4.947.771-1.277.196-4.011 1.628-6.077 3.182-3.38 2.541-4.17 2.825-7.873 2.825-3.563 0-4.524-.312-7.171-2.33-4.413-3.36-4.463-3.383-9.158-4.047-2.462-.348-5.29-1.295-6.65-2.229-2.834-1.943-5.269-6.018-5.269-8.818 0-3.342-1.109-6.205-3.736-9.65-2.756-3.612-3.709-7.46-2.7-10.896.365-1.243 1.788-3.735 3.162-5.535 1.698-2.226 2.634-4.33 2.924-6.576.754-5.833 1.101-6.696 3.768-9.365 2.563-2.563 6.435-4.178 10.041-4.186.99-.002 3.979-1.436 6.641-3.186C30.935.549 32.342 0 35.093 0c2.736 0 4.155.547 8.027 3.091ZM31.207 23.284c-1.166.747-4.908 4.17-8.315 7.607l-6.194 6.249 4.628 4.586 4.628 4.587 4.297-4.42c2.364-2.43 4.49-4.418 4.728-4.418.236 0 2.425 1.98 4.865 4.398l4.435 4.4 4.595-4.558 4.596-4.558-5.479-5.575c-6.786-6.907-10.447-9.663-12.827-9.66-1.01.001-2.791.614-3.957 1.362Z"
      fill="url(#a)"
    />
    <Defs>
      <RadialGradient
        id="a"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(127.05016 21 -21 127.05016 35 35)"
      >
        <Stop offset={0.167} stopColor="#70E2FF" />
        <Stop offset={0.558} stopColor="#CD93FF" />
        <Stop offset={0.696} stopColor="#CD93FF" />
      </RadialGradient>
    </Defs>
  </Svg>
)

export default SvgComponent
