import type { PropsWithChildren } from "react";

import styles from "./tag.module.css";

export function Tag({ children }: PropsWithChildren) {
	return <span className={styles.tag}>{children}</span>;
}
