const Shelf = () => {
    const shelf = new THREE.Group();
    const foot1 = Foot();
    shelf.add(foot1);
    foot1.position.x = 1.5;
    foot1.position.z = 1.5;
    foot1.position.y = 1.4;
    const foot2 = Foot();
    shelf.add(foot2);
    foot2.position.x = -1.5;
    foot2.position.z = 1.5;
    foot2.position.y = 1.4;
    const foot3 = Foot();
    shelf.add(foot3);
    foot3.position.x = -1.5;
    foot3.position.z = -1.5;
    foot3.position.y = 1.4;
    const foot4 = Foot();
    shelf.add(foot4);
    foot4.position.x = 1.5;
    foot4.position.z = -1.5;
    foot4.position.y = 1.4;

    const level1 = Level();
    shelf.add(level1);
    level1.position.y = 0;

    return shelf;
}

const Level = () => {
    const geometry = new THREE.BoxGeometry(3, 0.1, 3);
    const material = new THREE.MeshBasicMaterial({color: 0x6D1A09})
    const level = new THREE.Mesh(geometry, material);
    return level;
}

const Foot = () => {
    const geometry = new THREE.BoxGeometry(0.2, 3, 0.2);
    const material = new THREE.MeshBasicMaterial({color: 0x601101});
    const foot = new THREE.Mesh(geometry, material);
    return foot;
}

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    antialias: true
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xffffff);
camera.position.setZ(30);

const shelf = Shelf();
scene.add(shelf);

const controls = new THREE.OrbitControls(camera, renderer.domElement);

const animate = () => {
    requestAnimationFrame(animate);

    controls.update();

    renderer.render(scene,camera);
}

animate();

document.body.appendChild( renderer.domElement );