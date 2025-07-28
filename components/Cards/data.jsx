import { useTransform, useScroll, motion } from 'framer-motion';
import { useRef } from 'react';

const Card = ({title, description, src, url, color, i}) => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])

  return (
    <div ref={container} className={styles.cardContainer}>
      <div 
        className={styles.card}
        style={{backgroundColor: color, top:`calc(-5vh + ${i * 25}px)`}}
      >
          ...
          <div className={styles.imageContainer}>
            <motion.div 
              className={styles.inner}
              style={{scale: imageScale}}
            >
              <Image
                fill
                src={`/images/${src}`}
                alt="image" 
              />
            </motion.div>
          </div>
        </div>
      </div>
  )
}

export default Card;