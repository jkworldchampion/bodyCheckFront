// src/components/WhySection.tsx
'use client';
import React, { useRef } from "react";
import styles from "./WhySection.module.css";
import { useObserver } from "../utils/useObserver";

const WhySection: React.FC = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);

    const { isVisible: isVisible1 } = useObserver({ target: ref1, option: { threshold: 0.4 } });
    const { isVisible: isVisible2 } = useObserver({ target: ref2, option: { threshold: 0.8 } });
    const { isVisible: isVisible3 } = useObserver({ target: ref3, option: { threshold: 0.9 } });

    return (
        <div className={styles.whySectionWrapper}>
            <div className={styles.textContainer}>
                <h2 className={styles.mainTitle}>WHY?</h2>
                <p className={styles.mainText}>
                    운동의 중요성은 알지만 어떤 운동을 시작해야 할지 막막한 당신을 위해<br />
                    극한의 효율을 중시하는 현대인들에게 도움이 되고자 합니다.
                </p>
                <hr className={styles.separatorLine} />
            </div>
            <div className={styles.bubbleColumn}>
                <div
                    ref={ref1}
                    className={`${styles.bubbleSingle} ${isVisible1 ? styles.bubbleVisible : ""}`}
                >
                    어떻게 운동을 해야할지 막막해요
                </div>
                <div className={styles.bubbleRow}>
                    <div
                        ref={ref2}
                        className={`${styles.bubble} ${isVisible2 ? styles.bubbleVisible : ""}`}
                    >
                        내가 직접 운동을 하면서<br />바로바로 피드백을 받고 싶어요
                    </div>
                    <div
                        ref={ref3}
                        className={`${styles.bubble} ${isVisible3 ? styles.bubbleVisible : ""}`}
                    >
                        내가 직접 운동을 하면서<br />바로바로 피드백을 받고 싶어요
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhySection;
