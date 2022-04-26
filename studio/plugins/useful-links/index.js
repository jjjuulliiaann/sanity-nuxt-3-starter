import React from "react";
import PropTypes from "prop-types";

import styles from "./UsefulLinks.css";

class UsefulLinks extends React.Component {
	static propTypes = {
		imageWidth: PropTypes.number,
	};

	static defaultProps = {
		imageWidth: 600,
	};

	state = {
		error: null,
	};
	componentDidMount() {
		// nothing
	}

	render() {
		const { imageUrl, error } = this.state;
		if (error) {
			return <pre>{JSON.stringify(error, null, 2)}</pre>;
		}
		const { imageWidth } = this.props;
		return (
			<div className={styles.container}>
				<header className={styles.header}>
					<h2 className={styles.title}>💬</h2>
				</header>
				<div className={styles.content}>
					<h3 className={styles.title}>Deployment</h3>
					<p className={styles.text}>
						Auf den „Deploy” Button klicken, um eine neue statische
						Version der Webseite zu erstellen. Alle hier im Studio
						gemachten Änderungen werden damit veröffentlicht.
					</p>
					<p className={styles.text}>
						Ein Deploy dauert etwa 30–60 Sekunden. Die Netlify
						Statusanzeige links wechselt dabei von „Success“ auf
						„Building“.
					</p>
				</div>
			</div>
		);
	}
}

export default {
	name: "useful-links",
	component: UsefulLinks,
};
