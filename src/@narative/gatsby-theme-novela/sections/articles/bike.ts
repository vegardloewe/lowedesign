import { css } from "@emotion/core";

export const bike = css`
/*$background: white;
$bike: #00848B;
$detail: #00848B;
$crate: #ffd972;
$light: #efefef;*/

/*
body, .bike {
  display: flex;
  justify-content: center;
  align-items: center;
}

body {
  background: $background;
  margin: 0;
  height: 100vh;
}*/

.bike {
  position: relative;
  height: 100%;
  width: 700px;
  min-height: 700px;
  min-width: 700px;
  max-height: 700px;
  max-width: 700px;
}

.frame {
  /* main bike frame */
  position: absolute;
  top: 35.7%;
  left: 35.7%;
  height: 200px;
  width: 200px;
  box-sizing: border-box;
  background: transparent;
  border-left: 10px solid $bike;
  border-right: 10px solid $bike;
  transform: rotate(-25deg);
  background-image:
    linear-gradient(-30deg, transparent 21%, $bike 21%, $bike 25%, transparent 25%),
    linear-gradient(180deg, transparent 45%, $bike 45%, $bike 50%, transparent 50%);
  /* frame extending over front wheel*/
  box-shadow:
    95px 165px 0 -95px $bike,
    95px 160px 0 -95px $bike,
    95px 155px 0 -95px $bike,
    95px 150px 0 -95px $bike,
    95px 145px 0 -95px $bike,
    95px 140px 0 -95px $bike,
    95px 135px 0 -95px $bike,
    95px 130px 0 -95px $bike,
    95px 125px 0 -95px $bike,
    95px 120px 0 -95px $bike,
    95px 110px 0 -95px $bike,
    95px 105px 0 -95px $bike;
  &:before, &:after {
    position: absolute;
    content: '';
  }
  &:before {
    /* back frame for crate */
    height: 130px;
    width: 100px;
    top: 5%;
    right: 100%;
    background: transparent;
    border-left: 10px solid $bike;
    background-image:
      linear-gradient(25deg, transparent 68%, $bike 68%, $bike 74%, transparent 74%),
      linear-gradient(-30deg, transparent 39%, $bike 39%, $bike 45%, transparent 45%);
  }
  &:after {
    /* mud guard */
    height: 230px;
    width: 55px;
    background: $bike;
    transform: rotate(-65deg);
    top: 25%;
    left: -30%;
    border-radius: 50% 50% 50% 50% / 100% 100% 20% 20%;
    background-image:
      radial-gradient(circle at 50% 85%, $detail 8%, transparent 8%);
    box-shadow: inset 0px 0px 0 5px $detail;
  }
}

.wheel {
  /* skirt guard on top of wheel */
  position: absolute;
  height: 170px;
  width: 170px;
  border-radius: 50%;
  top: 52%;
  left: 12%;
  border: 10px solid transparent;
  border-top: 10px solid $bike;
  border-left: 10px solid $bike;
  transform: rotate(40deg);
  &:before {
    /* actual wheels */
    content: '';
    position: absolute;
    height: 140px;
    width: 140px;
    border-radius: 50%;
    top: 3%;
    left: 3%;
    border: 10px solid $light;
    box-shadow: inset 0px 0px 0 6px $detail;
    animation: spin 2s infinite linear;
    background-image:
      linear-gradient(292deg, transparent 49%, $bike 49%, $detail 51%, transparent 51%),
      linear-gradient(248deg, transparent 49%, $bike 49%, $detail 51%, transparent 51%),
      linear-gradient(202deg, transparent 49%, $bike 49%, $detail 51%, transparent 51%),
      linear-gradient(157deg, transparent 49%, $bike 49%, $detail 51%, transparent 51%),
      linear-gradient(135deg, transparent 49%, $bike 49%, $detail 51%, transparent 51%),
      linear-gradient(45deg, transparent 49%, pink 49%, $detail 51%, transparent 51%),
      linear-gradient(to left, transparent 49%, $bike 49%, $detail 51%, transparent 51%),
      linear-gradient(to bottom, transparent 49%, $bike 49%, $detail 51%, transparent 51%);
  }
}

.wheel + .wheel {
  /* front wheel */
  left: 58.5%;
  transform: rotate(12deg);
}

.crate {
  position: absolute;
  height: 60px;
  width: 115px;
  left: 10%;
  bottom: 49%;
  border-bottom: 8.5px solid $bike;
  background-image:
    /* left screws */
    radial-gradient( 7% 12% at 11% 20%, darken($crate, 15%) 50%, transparent 50%),
    radial-gradient( 7% 12% at 11% 50%, darken($crate, 15%) 50%, transparent 50%),
    radial-gradient( 7% 12% at 11% 82%, darken($crate, 15%) 50%, transparent 50%),
    /* right screws */
    radial-gradient( 7% 12% at 88% 20%, darken($crate, 15%) 50%, transparent 50%),
    radial-gradient( 7% 12% at 88% 50%, darken($crate, 15%) 50%, transparent 50%),
    radial-gradient( 7% 12% at 88% 82%, darken($crate, 15%) 50%, transparent 50%),
    /* horizontal wood */
    linear-gradient(to bottom, transparent 37%, $crate 37%, $crate 65%, transparent 65% ),
    linear-gradient(to top, transparent 7%, $crate 7%, $crate 30%, transparent 30% ),
    linear-gradient(to bottom, transparent 7%, $crate 7%, $crate 32%, transparent 32% ),
    /* vertical wood */
    linear-gradient(to right, transparent 5%, $crate 5%, $crate 19%, transparent 19% ),
    linear-gradient(to left, transparent 5%, $crate 5%, $crate 19%, transparent 19% );
}

.lightbulb {
  /* metal part of light */
  position: absolute;
  height: 25px;
  width: 25px;
  background: $bike;
  border-radius: 50% 0 0 50%;
  left: 63.5%;
  bottom: 53%;
  transform: rotate(-10deg);
  &:before, &:after {
    position: absolute;
    content: '';
  }
  &:before {
    /* light shining */
    height: 80px;
    width: 100px;
    clip-path: polygon(0 30%, 100% 0, 100% 100%, 0 60%);
    top: -95%;
    left: 160%;
    background-image:
      radial-gradient(circle at 0% 50%, rgba(239,239,239,.8), transparent 90%);
    animation: flicker 300ms ease-in-out infinite alternate;
  }
  &:after {
    /* light bulb */
    height: 25px;
    width: 7px;
    background: $light;
    border-radius: 0 50% 50% 0;
    right: -42%;
  }
}

.seat {
  position: absolute;
  height: 10px;
  width: 60px;
  background: $light;
  left: 29%;
  bottom: 57%;
  border-radius: 50px;
   transform: skew(-50deg);
    &:before {
    content: '';
    position: absolute;
    height: 20px;
    width: 33px;
    background: $light;
    bottom: 0%;
    border-radius: 50px;
    transform: skew(25deg);
    left: -20%;
  }
  &:after {
    content: '';
    position: absolute;
    height: 20px;
    width: 33px;
    background: $light;
    bottom: 0%;
    border-radius: 50px;
    transform: skew(60deg);
    left: 0%;
  }
}

.pedal {
  position: absolute;
  height: 55px;
  width: 10px;
  background: $light;
  bottom: 27.5%;
  left: 49.5%;
  border-radius: 50px;
  transform-origin: 50% 10%;
  animation: spin 2s infinite linear;
  background-image:
    radial-gradient(76% 12% at 50% 10%, $detail 50%, transparent 50%);
  &:after {
    content: '';
    position: absolute;
    height: 10px;
    width: 33px;
    background: $detail;
    border-radius: 50px;
    bottom: -10%;
    right: -110%;
    background-image:
    radial-gradient(20% 60% at 50% 50%, $light 50%, transparent 50%);
    animation: spin 2s infinite linear reverse;
  }
}

.pedal + .pedal {
  bottom: 27.5%;
  transform: rotate(180deg);
  animation: spin-2 2s infinite linear;
  z-index: -1;
  &:after {
    animation: spin-2 2s infinite linear reverse;
  }
}

.handlebar {
  position: absolute;
  height: 10px;
  width: 48px;
  background: $bike;
  border-radius: 50px;
  bottom: 66.6%;
  right: 47%;
  &:before {
    content: '';
    position: absolute;
    height: 11px;
    width: 40px;
    background: $bike;
    border-radius: 50px;
    right: -60%;
    bottom: 60%;
    transform: rotate(-25deg);
  }
}

.shadow {
  position: absolute;
  height: 45px;
  width: 515px;
  bottom: 20%;
  left: 11.5%;
  border-radius: 50%;
  background-color: darken($background, 5%);
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes spin-2 {
  from {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(540deg);
  }
}

@keyframes flicker {
  from {
    background-image:
      radial-gradient(circle at 0% 50%, rgba(239,239,239,.7), transparent 90%);
  }
  to {
    background-image:
      radial-gradient(circle at 0% 50%, rgba(239,239,239,.8), transparent 90%);
  }
}

`;
