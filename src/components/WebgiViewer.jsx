import React, {
  useRef,
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react";
import {
  ViewerApp,
  AssetManagerPlugin,
  GBufferPlugin,
  ProgressivePlugin,
  TonemapPlugin,
  SSRPlugin,
  SSAOPlugin,
  BloomPlugin,
  GammaCorrectionPlugin,
  mobileAndTabletCheck,

  // Color, // Import THREE.js internals
  // Texture, // Import THREE.js internals
} from "webgi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scrollAnimation } from "../lib/scroll-animation";


gsap.registerPlugin(ScrollTrigger)

function WebgiViewer() {
  const canvasRef = useRef(null); 
  
  const memoizedScrollAnimation = useCallback((position, target, onUpdate) => {
    if(position && target && onUpdate) {
        scrollAnimation(position,target,onUpdate)
    }
  },[])
  const setupViewer = useCallback(async () => {
    // Initialize the viewer
    const viewer = new ViewerApp({
      canvas: canvasRef.current,
    });

    // Add some plugins
    const manager = await viewer.addPlugin(AssetManagerPlugin);

    const camera = viewer.scene.activeCamera;
    const position = camera.position;
    const target = camera.target;

    // Add plugins individually.
    await viewer.addPlugin(GBufferPlugin)
    await viewer.addPlugin(new ProgressivePlugin(32))
    await viewer.addPlugin(new TonemapPlugin(true))
    await viewer.addPlugin(GammaCorrectionPlugin)
    await viewer.addPlugin(SSRPlugin)
    await viewer.addPlugin(SSAOPlugin)
    await viewer.addPlugin(BloomPlugin)

    viewer.renderer.refreshPipeline();

    await manager.addFromPath("scene-black.glb");

    viewer.getPlugin(TonemapPlugin).config.clipBackground = true;
    viewer.scene.activeCamera.setCameraOptions({controlsEnabled:false})

    window.scrollTo(0,0);

    let needsUpdate= true

    const onUpdate = () => {
        needsUpdate = true;
        viewer.setDirty()
    }

    viewer.addEventListener("preFrame",()=>{
        if(needsUpdate) {
            camera.positionTargetUpdated(true);
            needsUpdate = false
        }
    })
      console.log(position, target, onUpdate);


    memoizedScrollAnimation(position,target,onUpdate);
    // memoizedScrollAnimation(
    //   { x: -10.3534829845, y: 3.3011919392, z: 9.7285437247 },
    //   { x: 0.6370395979, y: 1.3204268197, z: 0.6561640364 },
    //   onUpdate
    // );

  },[])

  useEffect(() => {
    setupViewer()
  },[])

  return (
    <div id="webgi-canvas-container">
      <canvas id="webgi-canvas" ref={canvasRef} />
    </div>
  );
}

export default WebgiViewer;
