<!-- <template>
  <div ref="container" class="three-container"></div>
  <div>111</div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const container = ref(null)
let renderer, scene, camera, mixer

onMounted(() => {
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000)
  camera.position.z = 5

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(container.value.clientWidth, container.value.clientHeight)
  container.value.appendChild(renderer.domElement)

  const loader = new GLTFLoader()
  loader.load('/models/robi_1213.glb', (gltf) => {
    scene.add(gltf.scene)
  })

  animate()
})

function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}

onBeforeUnmount(() => {
  renderer.dispose()
})
</script>

<style>
.three-container {
  width: 800px;
  height: 800px;
  background: #ccc;
}
</style> -->
