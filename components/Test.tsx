"use client";

import { useState } from "react";
import { useSwipeable } from "react-swipeable"; // 1️⃣
import { clsx } from "clsx";

export default function Nav() {
  const [open, setOpen] = useState(false);

  /* 2️⃣ Configuración del swipe */
  const handlers = useSwipeable({
    onSwipedLeft: () => setOpen(false), // swipe → cierra
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, // también funciona con ratón
  });

  return (
    <div
      className={clsx(
        "fixed inset-0 z-40 md:hidden",
        open ? "visible" : "invisible",
      )}
    >
      {/* overlay */}
      <div
        onClick={() => setOpen(false)}
        className={clsx(
          "absolute inset-0 bg-black/40 transition-opacity",
          open ? "opacity-100" : "opacity-0",
        )}
      />

      {/* panel arrastrable */}
      <aside
        {...handlers} // 3️⃣ aplica el gesto
        className={clsx(
          "absolute left-0 top-0 h-full w-4/5 max-w-sm bg-white shadow-xl",
          "transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        …tu lista de links…
      </aside>
    </div>
  );
}
