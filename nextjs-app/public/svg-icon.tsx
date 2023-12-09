import React from "react";

interface Props {
   height?: number;
   width?: number;
   fill?: string;
}

// Homepage Icon
export function HomepageIcon({
   height = 24,
   width = 24,
   fill = "var(--text-dark-gray)",
}: Props) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
         width={width}
         height={height}
         fill={fill}
      >
         <path d="M9.464 1.286C10.294.803 11.092.5 12 .5c.908 0 1.707.303 2.537.786.795.462 1.7 1.142 2.815 1.977l2.232 1.675c1.391 1.042 2.359 1.766 2.888 2.826.53 1.059.53 2.268.528 4.006v4.3c0 1.355 0 2.471-.119 3.355-.124.928-.396 1.747-1.052 2.403-.657.657-1.476.928-2.404 1.053-.884.119-2 .119-3.354.119H7.93c-1.354 0-2.471 0-3.355-.119-.928-.125-1.747-.396-2.403-1.053-.656-.656-.928-1.475-1.053-2.403C1 18.541 1 17.425 1 16.07v-4.3c0-1.738-.002-2.947.528-4.006.53-1.06 1.497-1.784 2.888-2.826L6.65 3.263c1.114-.835 2.02-1.515 2.815-1.977zM10.5 13A1.5 1.5 0 0 0 9 14.5V21h6v-6.5a1.5 1.5 0 0 0-1.5-1.5h-3z"></path>
      </svg>
   );
}

// Down Arrow Solid Icon
export function DownArrowSolidIcon({
   height = 12,
   width = 12,
   fill = "var(--inactive-icon-color)",
}: Props) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 32 32"
         width={width}
         height={height}
         fill={fill}
      >
         <g
            transform="translate(0.000000,32.000000) scale(0.100000,-0.100000)"
            fill="#000000"
            stroke="none"
         >
            <path
               d="M20 227 c0 -7 31 -44 70 -82 l70 -69 70 69 c39 38 70 75 70 82 0 10
-33 13 -140 13 -107 0 -140 -3 -140 -13z"
            />
         </g>
      </svg>
   );
}

// Down Arrow Icon
export function DownArrowIcon({
   height = 12,
   width = 12,
   fill = "var(--inactive-icon-color)",
}: Props) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 330 330"
         width={width}
         height={height}
         fill={fill}
      >
         <path
            id="XMLID_225_"
            d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
	c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
	s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
         />
      </svg>
   );
}

// Left Arrow Icon
export function LeftArrowIcon({
   height = 16,
   width = 16,
   fill = "var(--inactive-icon-color)",
}: Props) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 92 92"
         width={width}
         height={height}
         fill={fill}
      >
         <path d="M84 46c0 2.2-1.8 4-4 4H21.6l18.1 18.2c1.6 1.6 1.6 4.1 0 5.7-.7.7-1.7 1.1-2.8 1.1-1 0-2.1-.4-2.8-1.2l-24.9-25c-1.6-1.6-1.6-4.1 0-5.6l24.9-25c1.6-1.6 4.1-1.6 5.7 0 1.6 1.6 1.6 4.1 0 5.7L21.6 42H80c2.2 0 4 1.8 4 4z"></path>
         ;
      </svg>
   );
}

// Camera Icon
export function CameraIcon({
   height = 20,
   width = 20,
   fill = "var(--inactive-icon-color)",
}: Props) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 478 478"
         width={width}
         height={height}
         fill={fill}
      >
         <g>
            <g>
               <path
                  d="M308.1,277.95c0,35.7-28.9,64.6-64.6,64.6s-64.6-28.9-64.6-64.6s28.9-64.6,64.6-64.6S308.1,242.25,308.1,277.95z
			 M440.3,116.05c25.8,0,46.7,20.9,46.7,46.7v122.4v103.8c0,27.5-22.3,49.8-49.8,49.8H49.8c-27.5,0-49.8-22.3-49.8-49.8v-103.9
			v-122.3l0,0c0-25.8,20.9-46.7,46.7-46.7h93.4l4.4-18.6c6.7-28.8,32.4-49.2,62-49.2h74.1c29.6,0,55.3,20.4,62,49.2l4.3,18.6H440.3z
			 M97.4,183.45c0-12.9-10.5-23.4-23.4-23.4c-13,0-23.5,10.5-23.5,23.4s10.5,23.4,23.4,23.4C86.9,206.95,97.4,196.45,97.4,183.45z
			 M358.7,277.95c0-63.6-51.6-115.2-115.2-115.2s-115.2,51.6-115.2,115.2s51.6,115.2,115.2,115.2S358.7,341.55,358.7,277.95z"
               />
            </g>
         </g>
      </svg>
   );
}

//

// Minimize Icon
export function MinimizeIcon({
   height = 16,
   width = 16,
   fill = "var(--inactive-icon-color)",
}: Props) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 290.658 290.658"
         width={width}
         height={height}
         fill={fill}
      >
         <g>
            <g>
               <rect y="139.474" width="290.658" height="11.711" />
            </g>
         </g>
      </svg>
   );
}

// Close Icon
export function CloseIcon({
   height = 16,
   width = 16,
   fill = "var(--inactive-icon-color)",
}: Props) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 256 256"
         width={width}
         height={height}
         fill={fill}
      >
         <defs></defs>
         <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
            <path
               d="M 5 90 c -1.28 0 -2.559 -0.488 -3.536 -1.465 c -1.953 -1.952 -1.953 -5.118 0 -7.07 l 80 -80 c 1.951 -1.952 5.119 -1.952 7.07 0 c 1.953 1.953 1.953 5.119 0 7.071 l -80 80 C 7.559 89.512 6.28 90 5 90 z"
               transform=" matrix(1 0 0 1 0 0) "
               strokeLinecap="round"
            />
            <path
               d="M 85 90 c -1.279 0 -2.56 -0.488 -3.535 -1.465 l -80 -80 c -1.953 -1.953 -1.953 -5.119 0 -7.071 s 5.118 -1.952 7.071 0 l 80 80 c 1.953 1.952 1.953 5.118 0 7.07 C 87.56 89.512 86.279 90 85 90 z"
               transform=" matrix(1 0 0 1 0 0) "
               strokeLinecap="round"
            />
         </g>
      </svg>
   );
}

// Plus Icon
export function PlusIcon({
   height = 20,
   width = 20,
   fill = "var(--inactive-icon-color)",
}: Props) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
         width={width}
         height={height}
         fill={fill}
      >
         <path d="M11 19a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V5a1 1 0 1 0-2 0v6H5a1 1 0 1 0 0 2h6v6z"></path>
      </svg>
   );
}

// Create Icon
export function CreateIcon({
   height = 24,
   width = 24,
   fill = "var(--text-dark-gray)",
}: Props) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 256 256"
         width={width}
         height={height}
         fill={fill}
      >
         <g>
            <g>
               <path
                  fill="#000000"
                  d="M203.4,202.1c0,8.2-6.6,14.9-14.9,14.9H54.6c-8.2,0-14.9-6.6-14.9-14.9V68.2c0-8.2,6.7-14.9,14.9-14.9h89.3V23.5H39.8C23.3,23.5,10,36.9,10,53.3v163.7c0,16.4,13.3,29.8,29.8,29.8h163.7c16.4,0,29.8-13.3,29.8-29.8V112.8h-29.8V202.1z M68.1,187.2l31.5-10.5L215.4,60.9l-21-21L78.6,155.6L68.1,187.2z M243.8,22l-10.5-10.5c-2.9-2.9-7.6-2.9-10.5,0l-8.1,8.2l0,0l-9.8,9.8l21,21l2.2-2.1l15.8-15.8C246.7,29.6,246.7,24.9,243.8,22z"
               />
            </g>
         </g>
      </svg>
   );
}

// Notification Solid Icon
export function NotificationSolidIcon({
   height = 20,
   width = 20,
   fill = "var(--inactive-icon-color)",
}: Props) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
         width={width}
         height={height}
         fill={fill}
      >
         <path d="M3 9.5a9 9 0 1 1 18 0v2.927c0 1.69.475 3.345 1.37 4.778a1.5 1.5 0 0 1-1.272 2.295h-4.625a4.5 4.5 0 0 1-8.946 0H2.902a1.5 1.5 0 0 1-1.272-2.295A9.01 9.01 0 0 0 3 12.43V9.5zm6.55 10a2.5 2.5 0 0 0 4.9 0h-4.9z"></path>
      </svg>
   );
}

// Notification Icon
export function NotificationIcon({
   height = 20,
   width = 20,
   fill = "var(--inactive-icon-color)",
}: Props) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 48 48"
         width={width}
         height={height}
         fill={fill}
      >
         <g
            transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)"
            fill="#000000"
            stroke="none"
         >
            <path
               d="M167 418 c-48 -28 -77 -87 -77 -156 0 -28 -7 -67 -17 -86 -22 -48 -7
-66 58 -66 39 0 49 -4 54 -20 15 -47 86 -50 107 -5 10 21 18 25 58 25 64 0 79
18 57 66 -10 20 -17 60 -17 92 -1 134 -115 212 -223 150z m156 -47 c26 -26 31
-39 36 -103 4 -40 12 -83 19 -95 7 -12 12 -24 12 -27 0 -3 -67 -6 -150 -6 -82
0 -150 3 -150 6 0 3 5 15 12 27 7 12 15 55 18 95 7 75 28 112 75 133 37 16 96
3 128 -30z m-55 -273 c-6 -17 -50 -17 -55 0 -3 8 6 12 27 12 21 0 30 -4 28
-12z"
            />
         </g>
      </svg>
   );
}

// Friend Solid Icon
export function FriendSolidIcon({
   height = 20,
   width = 20,
   fill = "var(--inactive-icon-color)",
}: Props) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 48 48"
         width={width}
         height={height}
         fill={fill}
      >
         <g
            transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)"
            fill="#000000"
            stroke="none"
         >
            <path
               d="M272 380 c-47 -44 -15 -130 48 -130 38 0 70 34 70 75 0 41 -32 75
-70 75 -14 0 -36 -9 -48 -20z"
            />
            <path
               d="M112 340 c-47 -44 -15 -130 48 -130 38 0 70 34 70 75 0 41 -32 75
-70 75 -14 0 -36 -9 -48 -20z"
            />
            <path
               d="M245 225 c-18 -8 -23 -14 -13 -14 25 -1 78 -50 78 -72 0 -17 8 -19
65 -19 73 0 90 14 73 61 -18 51 -134 76 -203 44z"
            />
            <path
               d="M78 184 c-42 -18 -64 -62 -45 -89 10 -13 31 -15 132 -13 l120 3 0 34
c0 25 -7 39 -27 54 -37 27 -129 33 -180 11z"
            />
         </g>
      </svg>
   );
}

// Friend Icon
export function FriendIcon({
   height = 20,
   width = 20,
   fill = "var(--inactive-icon-color)",
}: Props) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 48 48"
         width={width}
         height={height}
         fill={fill}
      >
         <g
            transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)"
            fill="#000000"
            stroke="none"
         >
            <path
               d="M272 380 c-47 -44 -15 -130 48 -130 38 0 70 34 70 75 0 41 -32 75
-70 75 -14 0 -36 -9 -48 -20z m78 -24 c28 -35 -11 -93 -47 -70 -36 22 -23 84
17 84 10 0 23 -7 30 -14z"
            />
            <path
               d="M112 340 c-47 -44 -15 -130 48 -130 38 0 70 34 70 75 0 41 -32 75
-70 75 -14 0 -36 -9 -48 -20z m78 -24 c28 -35 -11 -93 -47 -70 -36 22 -23 84
17 84 10 0 23 -7 30 -14z"
            />
            <path
               d="M235 220 c-22 -11 -56 -20 -77 -20 -85 0 -153 -55 -126 -103 8 -14
27 -17 129 -17 112 0 121 1 126 20 5 18 14 20 79 20 83 0 99 12 82 61 -19 55
-139 77 -213 39z m155 -23 c14 -7 26 -20 28 -30 5 -26 -124 -24 -155 2 -13 11
-23 22 -23 24 0 18 117 21 150 4z m-160 -40 c14 -7 26 -20 28 -30 3 -15 -7
-17 -98 -17 -91 0 -101 2 -98 17 5 25 46 43 98 43 25 0 56 -6 70 -13z"
            />
         </g>
      </svg>
   );
}

// Messenger Solid Icon
export function MessengerSolidIcon({
   height = 20,
   width = 20,
   fill = "var(--inactive-icon-color)",
}: Props) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
         width={width}
         height={height}
         fill={fill}
      >
         <path d="M.5 12C.5 5.649 5.649.5 12 .5S23.5 5.649 23.5 12 18.351 23.5 12 23.5c-1.922 0-3.736-.472-5.33-1.308a.63.63 0 0 0-.447-.069l-3.4.882a1.5 1.5 0 0 1-1.828-1.829l.882-3.4a.63.63 0 0 0-.07-.445A11.454 11.454 0 0 1 .5 12zm17.56-1.43a.819.819 0 0 0-1.125-1.167L14 11.499l-3.077-2.171a1.5 1.5 0 0 0-2.052.308l-2.93 3.793a.819.819 0 0 0 1.123 1.167L10 12.5l3.076 2.172a1.5 1.5 0 0 0 2.052-.308l2.931-3.793z"></path>
      </svg>
   );
}

// Messenger Icon
export function MessengerIcon({
   height = 20,
   width = 20,
   fill = "var(--inactive-icon-color)",
}: Props) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
         width={width}
         height={height}
         fill={fill}
      >
         <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            id="messenger"
         >
            <path
               fill="none"
               stroke="#212121"
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth="2"
               d="M14.268,2.112A13,13,0,0,0,6,23.3v3.661A1.258,1.258,0,0,0,7.82,28.09l2.663-1.332a12.9,12.9,0,0,0,7.25,1.126A13,13,0,1,0,14.268,2.112Z"
            ></path>
            <path d="M9.049,18.163,13.64,11.63a.64.64,0,0,1,.94-.2l3.075,2.307a.641.641,0,0,0,.714.036l3.745-2.646a.64.64,0,0,1,.9.835l-3.707,6.414a.64.64,0,0,1-.9.263L14.3,16.181a.638.638,0,0,0-.615-.024l-3.794,2.9A.641.641,0,0,1,9.049,18.163Z"></path>
         </svg>
      </svg>
   );
}

// Send Message Icon
export function SendMessageIcon({
   width = 20,
   height = 20,
   fill = "rgb(101,103,107)",
}: Props) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
         width={width}
         height={height}
         fill={fill}
      >
         <path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 C22.8132856,11.0605983 22.3423792,10.4322088 21.714504,10.118014 L4.13399899,1.16346272 C3.34915502,0.9 2.40734225,1.00636533 1.77946707,1.4776575 C0.994623095,2.10604706 0.8376543,3.0486314 1.15159189,3.99121575 L3.03521743,10.4322088 C3.03521743,10.5893061 3.34915502,10.7464035 3.50612381,10.7464035 L16.6915026,11.5318905 C16.6915026,11.5318905 17.1624089,11.5318905 17.1624089,12.0031827 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z"></path>
         ;
      </svg>
   );
}

// Public Icon
export function PublicIcon({
   width = 12,
   height = 12,
   fill = "rgb(101,103,107)",
}: Props) {
   return (
      <svg viewBox="0 0 16 16" width={width} height={height} fill={fill}>
         <g fillRule="evenodd" transform="translate(-448 -544)">
            <g>
               <path
                  d="M109.5 408.5c0 3.23-2.04 5.983-4.903 7.036l.07-.036c1.167-1 1.814-2.967 2-3.834.214-1 .303-1.3-.5-1.96-.31-.253-.677-.196-1.04-.476-.246-.19-.356-.59-.606-.73-.594-.337-1.107.11-1.954.223a2.666 2.666 0 0 1-1.15-.123c-.007 0-.007 0-.013-.004l-.083-.03c-.164-.082-.077-.206.006-.36h-.006c.086-.17.086-.376-.05-.529-.19-.214-.54-.214-.804-.224-.106-.003-.21 0-.313.004l-.003-.004c-.04 0-.084.004-.124.004h-.037c-.323.007-.666-.034-.893-.314-.263-.353-.29-.733.097-1.09.28-.26.863-.8 1.807-.22.603.37 1.166.667 1.666.5.33-.11.48-.303.094-.87a1.128 1.128 0 0 1-.214-.73c.067-.776.687-.84 1.164-1.2.466-.356.68-.943.546-1.457-.106-.413-.51-.873-1.28-1.01a7.49 7.49 0 0 1 6.524 7.434"
                  transform="translate(354 143.5)"
               ></path>
               <path
                  d="M104.107 415.696A7.498 7.498 0 0 1 94.5 408.5a7.48 7.48 0 0 1 3.407-6.283 5.474 5.474 0 0 0-1.653 2.334c-.753 2.217-.217 4.075 2.29 4.075.833 0 1.4.561 1.333 2.375-.013.403.52 1.78 2.45 1.89.7.04 1.184 1.053 1.33 1.74.06.29.127.65.257.97a.174.174 0 0 0 .193.096"
                  transform="translate(354 143.5)"
               ></path>
               <path
                  fillRule="nonzero"
                  d="M110 408.5a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-1 0a7 7 0 1 0-14 0 7 7 0 0 0 14 0z"
                  transform="translate(354 143.5)"
               ></path>
            </g>
         </g>
      </svg>
   );
}

// Private Icon
export function PrivateIcon({
   height = 12,
   width = 12,
   fill = "var(--inactive-icon-color)",
}: Props) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 30 30"
         width={width}
         height={height}
         fill={fill}
      >
         <path d="M 15 2 C 11.145666 2 8 5.1456661 8 9 L 8 11 L 6 11 C 4.895 11 4 11.895 4 13 L 4 25 C 4 26.105 4.895 27 6 27 L 24 27 C 25.105 27 26 26.105 26 25 L 26 13 C 26 11.895 25.105 11 24 11 L 22 11 L 22 9 C 22 5.2715823 19.036581 2.2685653 15.355469 2.0722656 A 1.0001 1.0001 0 0 0 15 2 z M 15 4 C 17.773666 4 20 6.2263339 20 9 L 20 11 L 10 11 L 10 9 C 10 6.2263339 12.226334 4 15 4 z" />
         ;
      </svg>
   );
}

// Like Reaction Icon
export function LikeReactionIcon({
   width = 18,
   height = 18,
   fill = "none",
}: Props) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 16 16"
         width={width}
         height={height}
         fill={fill}
      >
         <path
            d="M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z"
            fill="url(#paint0_linear_15251_63610)"
         />
         <path
            d="M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z"
            fill="url(#paint1_radial_15251_63610)"
         />
         <path
            d="M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z"
            fill="url(#paint2_radial_15251_63610)"
            fillOpacity=".5"
         />
         <path
            d="M7.3014 3.8662a.6974.6974 0 0 1 .6974-.6977c.6742 0 1.2207.5465 1.2207 1.2206v1.7464a.101.101 0 0 0 .101.101h1.7953c.992 0 1.7232.9273 1.4917 1.892l-.4572 1.9047a2.301 2.301 0 0 1-2.2374 1.764H6.9185a.5752.5752 0 0 1-.5752-.5752V7.7384c0-.4168.097-.8278.2834-1.2005l.2856-.5712a3.6878 3.6878 0 0 0 .3893-1.6509l-.0002-.4496ZM4.367 7a.767.767 0 0 0-.7669.767v3.2598a.767.767 0 0 0 .767.767h.767a.3835.3835 0 0 0 .3835-.3835V7.3835A.3835.3835 0 0 0 5.134 7h-.767Z"
            fill="#fff"
         />
         <defs>
            <radialGradient
               id="paint1_radial_15251_63610"
               cx="0"
               cy="0"
               r="1"
               gradientUnits="userSpaceOnUse"
               gradientTransform="rotate(90 .0005 8) scale(7.99958)"
            >
               <stop offset=".5618" stopColor="#0866FF" stopOpacity="0" />
               <stop offset="1" stopColor="#0866FF" stopOpacity=".1" />
            </radialGradient>
            <radialGradient
               id="paint2_radial_15251_63610"
               cx="0"
               cy="0"
               r="1"
               gradientUnits="userSpaceOnUse"
               gradientTransform="rotate(45 -4.5257 10.9237) scale(10.1818)"
            >
               <stop offset=".3143" stopColor="#02ADFC" />
               <stop offset="1" stopColor="#02ADFC" stopOpacity="0" />
            </radialGradient>
            <linearGradient
               id="paint0_linear_15251_63610"
               x1="2.3989"
               y1="2.3999"
               x2="13.5983"
               y2="13.5993"
               gradientUnits="userSpaceOnUse"
            >
               <stop stopColor="#02ADFC" />
               <stop offset=".5" stopColor="#0866FF" />
               <stop offset="1" stopColor="#2B7EFF" />
            </linearGradient>
         </defs>
      </svg>
   );
}
