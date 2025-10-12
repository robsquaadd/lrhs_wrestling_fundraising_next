export function ImpactStats() {
  const stats = [
    { value: "3", label: "State Qualifiers", sublabel: "Last Season" },
    { value: "3", label: "District Champions", sublabel: "Last Season" },
    { value: "100%", label: "Graduation Rate", sublabel: "Team Average" },
    { value: "3.5", label: "Team GPA", sublabel: "Academic Excellence" },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Our Impact
            </h2>
            <p className="text-pretty text-lg text-muted-foreground leading-relaxed">
              Building champions on and off the mat
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 text-5xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold">{stat.label}</div>
                <div className="text-sm text-muted-foreground">
                  {stat.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
