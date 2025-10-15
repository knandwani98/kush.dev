import { cn } from "@/lib/utils";

export const WorkProject = ({
  project,
}: {
  project: { title: string; description: string[] };
}) => {
  const { title, description } = project;

  return (
    <li className="mb-4">
      <p className="text-sm sm:text-base text-primary/90 font-semibold">
        {title} :{" "}
        <span
          className={cn(
            "font-extralight text-primary/60",
            "max-sm:line-clamp-2 max-sm:overflow-hidden"
          )}
        >
          <ul>
            {description &&
              description?.map((item: string) => (
                <li key={item} className="flex items-start justify-start gap-2">
                  <span className="text-sm block size-1 bg-primary/60 rounded-full mt-2 ml-6" />
                  <p className="text-primary/60 text-sm inline">{item}</p>
                </li>
              ))}
          </ul>
        </span>
      </p>
    </li>
  );
};
