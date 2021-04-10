import { noise } from './PerlinNoise';

const fogParsVert = `
#ifdef USE_FOG
  varying float fogDepth;
  varying vec3 vFogWorldPosition;
#endif
`;

const fogVert = `
#ifdef USE_FOG
  fogDepth = - mvPosition.z;
  vFogWorldPosition = (modelMatrix * vec4( transformed, 1.0 )).xyz;
#endif
`;

const fogFrag = `
#ifdef USE_FOG
  vec3 windDir = vec3(0.0, 0.0, time);
  vec3 scrollingPos = vFogWorldPosition.xyz + fogNoiseSpeed * windDir;
  float noise = cnoise(fogNoiseFreq * scrollingPos.xyz);
  float vFogDepth = (1.0 - fogNoiseImpact * noise) * fogDepth;
  #ifdef FOG_EXP2
  float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
  #else
  float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
  #endif
  gl_FragColor.rgb = mix( gl_FragColor.rgb, mix(fogNearColor, fogColor, fogFactor), fogFactor );
#endif

`;

const fogParsFrag = `
#ifdef USE_FOG
  ${noise}
	uniform vec3 fogColor;
  uniform vec3 fogNearColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
  varying vec3 vFogWorldPosition;
  uniform float time;
  uniform float fogNoiseSpeed;
  uniform float fogNoiseFreq;
  uniform float fogNoiseImpact;
#endif
`;

export { fogFrag,fogParsFrag, fogParsVert, fogVert };
