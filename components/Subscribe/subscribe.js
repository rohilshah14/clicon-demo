import classes from "./subscribe.module.css";
export default function Subscribe() {
  return (
    <div className={classes["subscribe-wrap"]}>
      <div className="container">
        <div className={classes.subscribe}>
          <h3 className="h4">Subscribe to our newsletter</h3>
          <p>
            Praesent fringilla erat a lacinia egestas. Donec vehicula tempor
            libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.
          </p>
        </div>
      </div>
    </div>
  );
}
