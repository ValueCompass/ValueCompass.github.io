<template>
  <div>
    <div class="dot-flashing"></div>
  </div>
</template>

<style>
.dot-flashing {
  position: relative;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: #333;
  color: #333;
  animation: dot-flashing 1s infinite linear alternate;
  animation-delay: 0.5s;
}
.dot-flashing::before,
.dot-flashing::after {
  content: "";
  display: inline-block;
  position: absolute;
  top: 0;
}
.dot-flashing::before {
  left: -0.86rem;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: #333;
  color: #333;
  animation: dot-flashing 1s infinite alternate;
  animation-delay: 0s;
}
.dot-flashing::after {
  left: 0.86rem;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: #333;
  color: #333;
  animation: dot-flashing 1s infinite alternate;
  animation-delay: 1s;
}

@keyframes dot-flashing {
  0% {
    background-color: #333;
  }
  50%,
  100% {
    background-color: rgba(51, 51, 51, 0.2);
  }
}
</style>
