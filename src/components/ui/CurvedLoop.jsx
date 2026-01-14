import { useRef, useEffect, useState, useMemo, useId } from 'react';

const CurvedLoop = ({
  marqueeText = '',
  speed = 1,
  curveAmount = 420,
  direction = 'right',
  interactive = true,
  className = ''
}) => {
  const text = useMemo(() => marqueeText.trim() + '\u00A0', [marqueeText]);

  const measureRef = useRef(null);
  const textPathRef = useRef(null);
  const [spacing, setSpacing] = useState(0);
  const uid = useId();

  const dragRef = useRef(false);
  const lastX = useRef(0);
  const velocity = useRef(0);
  const dirRef = useRef(direction);

  /** SVG geometry */
  const VIEWBOX_WIDTH = 1440;
  const VIEWBOX_HEIGHT = 860;
  const BASE_Y = VIEWBOX_HEIGHT / 2;

  const pathId = `curve-${uid}`;
  const pathD = `
    M 0 ${BASE_Y}
    Q ${VIEWBOX_WIDTH / 2} ${BASE_Y + curveAmount}
    ${VIEWBOX_WIDTH} ${BASE_Y}
  `;

  /** Measure text */
  useEffect(() => {
    if (measureRef.current) {
      setSpacing(measureRef.current.getComputedTextLength());
    }
  }, [text]);

  const repeatedText = spacing
    ? Array(Math.ceil(VIEWBOX_WIDTH / spacing) + 4).fill(text).join('')
    : text;

  /** Animation */
  useEffect(() => {
    if (!spacing || !textPathRef.current) return;

    let offset = -spacing;
    textPathRef.current.setAttribute('startOffset', offset + 'px');

    const animate = () => {
      if (!dragRef.current) {
        offset += dirRef.current === 'right' ? speed : -speed;

        if (offset <= -spacing) offset += spacing;
        if (offset > 0) offset -= spacing;

        textPathRef.current.setAttribute('startOffset', offset + 'px');
      }
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [spacing, speed]);

  /** Drag */
  const onPointerDown = e => {
    if (!interactive) return;
    dragRef.current = true;
    lastX.current = e.clientX;
    velocity.current = 0;
    e.target.setPointerCapture(e.pointerId);
  };

  const onPointerMove = e => {
    if (!interactive || !dragRef.current || !textPathRef.current) return;
    const dx = e.clientX - lastX.current;
    lastX.current = e.clientX;
    velocity.current = dx;

    let offset = parseFloat(textPathRef.current.getAttribute('startOffset'));
    offset += dx;

    if (offset <= -spacing) offset += spacing;
    if (offset > 0) offset -= spacing;

    textPathRef.current.setAttribute('startOffset', offset + 'px');
  };

  const onPointerUp = () => {
    dragRef.current = false;
    dirRef.current = velocity.current > 0 ? 'right' : 'left';
  };

  return (
    <div
      className="w-full flex justify-center items-center"
      style={{ cursor: interactive ? 'grab' : 'default' }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      <svg
        viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
        preserveAspectRatio="xMidYMid meet"
        className="w-full max-w-[1600px] h-auto flex items-end overflow-visible"
      >
        {/* Measure */}
        <text ref={measureRef} style={{ visibility: 'hidden' }}>
          {text}
        </text>

        <defs>
          <path id={pathId} d={pathD} fill="none" />
        </defs>

        {spacing > 0 && (
          <text
            className={`font-bold uppercase fill-black text-[20px] tracking-[0.35em] ${className}`}
            style={{
              transform: 'scaleX(1.5)',
              transformOrigin: 'center'
            }}
          >
            <textPath ref={textPathRef} href={`#${pathId}`}>
              {repeatedText}
            </textPath>
          </text>
        )}
      </svg>
    </div>
  );
};

export default CurvedLoop;
