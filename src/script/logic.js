import { ref, onMounted, onUnmounted } from 'vue'

export default function currentDevice() {
  let device = ref(getCurrentDevice())

  function getCurrentDevice() {
    if (screen.width < 768) {
      return 'phone'
    }
    if (screen.width < 992) {
      return 'pad'
    }
    if (screen.width < 1200) {
      return 'desktop-Small'
    }
    return 'desktop'
  }

  onMounted(() => {
    window.addEventListener('resize', updateDevice)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateDevice)
  })

  const updateDevice = () => {
    device.value = getCurrentDevice()
  }

  return device
}
