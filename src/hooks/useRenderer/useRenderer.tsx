import * as THREE from 'three';
import useWindowSize from '../useWindowSize/useWindowSize';

const useRenderer = (canvas: HTMLCanvasElement) => {
  const { width, height } = useWindowSize()
  if (canvas) {
    //Scene
    const scene = new THREE.Scene()
    const geometry = new THREE.SphereGeometry(3, 64, 64)
    const material = new THREE.MeshStandardMaterial({
      color: "#FF0000"
    })
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    //Light
    const light = new THREE.PointLight(0xFF00FF, 200, 100)
    light.castShadow = true
    light.position.set(-10, 10, 10)
    scene.add(light)

    //Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
    camera.position.z = 10
    scene.add(camera)

    //Renderer
    const renderer = new THREE.WebGLRenderer({ canvas: canvas })
    renderer.setSize(width, height)
    renderer.render(scene, camera)
  }
}

export default useRenderer;