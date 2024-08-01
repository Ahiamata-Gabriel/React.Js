import { type ReactNode } from "react";

type CourseGoalProp = {
  id: number;
  title: string;
  children: ReactNode;
  onDelete: (id: number) => void;
};

function CourseGoal({ id, title, children, onDelete }: CourseGoalProp) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}

export default CourseGoal;
