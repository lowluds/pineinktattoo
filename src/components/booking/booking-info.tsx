const details = [
  {
    label: "Phone number",
    value: "(416) 486-9290",
  },
  {
    label: "Address",
    value: "2367 Yonge Street, Toronto ON M4P 2C8, Floor 2",
  },
  {
    label: "Studio hours",
    value: "Monday to Saturday, 10:00 am - 8:00 pm\nSunday, 12:00 pm - 6:00 pm",
  },
  {
    label: "Email",
    value: "pineinktoronto@gmail.com",
  },
];

export function BookingInfo() {
  return (
    <aside className="space-y-10">
      <div>
        <p className="mb-5 text-xs font-medium uppercase tracking-[0.42em] text-white/48">
          Book now with
        </p>
        <h2 className="font-display text-5xl font-medium uppercase leading-[1.05] text-white sm:text-6xl">
          Pine Ink Tattoo
        </h2>
      </div>

      <div className="space-y-8">
        {details.map((item) => (
          <div key={item.label}>
            <p className="text-sm text-white/46">{item.label}:</p>
            <p className="mt-2 whitespace-pre-line text-lg leading-7 text-white/82 sm:text-xl sm:leading-8">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      <a
        href="/about"
        className="inline-flex text-lg font-medium uppercase tracking-wide text-white underline-offset-8 hover:underline"
      >
        Read our deposit policy here
      </a>
    </aside>
  );
}
