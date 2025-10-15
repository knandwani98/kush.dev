export const WorkProject = ({
  project,
}: {
  project: { title: string; description: string[] };
}) => {
  const { title, description } = project;

  return (
    <li className="mb-4">
      <p className="text-primary font-semibold">
        {title}

        <ul className="mt-1 flex flex-col gap-1 justify-center items-start">
          {description &&
            description?.map((item: string) => (
              <li key={item} className="flex items-start justify-start gap-2">
                <span className="text-sm block size-1 bg-primary/20 rounded-full mt-1.5" />
                <p className="text-primary/80 text-sm inline font-light tracking-wide">
                  {item}
                </p>
              </li>
            ))}
        </ul>
      </p>
    </li>
  );
};
