// components/EmojiBackground.js

'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const EmojiBackground = ({ emoji, backgroundColor }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    let width = mount.clientWidth;
    let height = mount.clientHeight;

    // Scene, camera, renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(width, height);
    mount.appendChild(renderer.domElement);

    // Set the background color
    scene.background = new THREE.Color(backgroundColor);

    camera.position.z = 5;

    // Emoji texture
    const loader = new THREE.TextureLoader();
    loader.load(
      `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"><text x="0" y="32" font-size="32">${emoji}</text></svg>`,
      (texture) => {
        const emojiTexture = texture;

        // Define possible sizes
        const sizes = [96, 120, 144];

        // Create emoji meshes
        const emojis = [];
        for (let i = 0; i < 10; i++) {
          // Randomly select a size
          const size = sizes[Math.floor(Math.random() * sizes.length)];

          // Maintain aspect ratio of the plane based on the texture dimensions
          const aspectRatio = emojiTexture.image.width / emojiTexture.image.height;
          const geometry = new THREE.PlaneGeometry(size / 60 * aspectRatio, size / 60);

          const material = new THREE.MeshBasicMaterial({ map: emojiTexture, transparent: true });
          const mesh = new THREE.Mesh(geometry, material);

          mesh.position.set(
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            0 // Ensure all emojis are on the same Z plane
          );

          // No initial rotation
          mesh.rotation.set(0, 0, 0);

          // Assign random speeds
          const maxSpeed = 0.03; // Adjust max speed as necessary
          mesh.userData = {
            velocity: new THREE.Vector3(
              (Math.random() - 0.5) * maxSpeed,
              (Math.random() - 0.5) * maxSpeed,
              0 // No velocity in Z axis to keep movement on XY plane
            )
          };

          scene.add(mesh);
          emojis.push(mesh);
        }

        // Animation loop
        const animate = () => {
          requestAnimationFrame(animate);

          emojis.forEach(emoji => {
            emoji.position.add(emoji.userData.velocity);

            // Check for boundary collisions and reverse direction
            if (emoji.position.x > 5 || emoji.position.x < -5) emoji.userData.velocity.x *= -1;
            if (emoji.position.y > 5 || emoji.position.y < -5) emoji.userData.velocity.y *= -1;

            // Check for collisions with other emojis
            emojis.forEach(otherEmoji => {
              if (emoji !== otherEmoji && emoji.position.distanceTo(otherEmoji.position) < 0.5) {
                const tempVelocity = emoji.userData.velocity.clone();
                emoji.userData.velocity.copy(otherEmoji.userData.velocity);
                otherEmoji.userData.velocity.copy(tempVelocity);
              }
            });
            
            // Rotate emojis
            emoji.rotation.z += 0.01;

          });

          renderer.render(scene, camera);
        };

        animate();
      },
      undefined,
      (error) => {
        console.error('Error loading emoji texture:', error);
      }
    );

    // Handle window resize
    const onResize = () => {
      width = mount.clientWidth;
      height = mount.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', onResize);

    // Cleanup
    return () => {
      mount.removeChild(renderer.domElement);
      window.removeEventListener('resize', onResize);
    };
  }, [emoji, backgroundColor]);

  return <div ref={mountRef} style={{ width: '100vw', height: '100vh', overflow: 'hidden' }} />;
};

export default EmojiBackground;
