const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshBasicMaterial({color: 0xFF6347, wireframe: true});
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);

const controls = new THREE.OrbitControls(camera, renderer.domElement);

function animate(){

    requestAnimationFrame(animate);

    torus.rotation.x += 0.01;

    controls.update();

    renderer.render(scene,camera);

}
animate();

document.body.appendChild( renderer.domElement );