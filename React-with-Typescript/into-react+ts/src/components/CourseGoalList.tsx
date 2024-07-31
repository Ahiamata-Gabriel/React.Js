import CourseGoal from "./CourseGoal";
import { CourseGoal as CGoal } from "../App.tsx";

type CourseGoalListProps = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};

function CourseGoalList({ goals, onDeleteGoal }: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
            {goal.description}
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}

export default CourseGoalList;
