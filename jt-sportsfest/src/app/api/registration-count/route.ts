export async function GET() {
  const endpoint = process.env.REGISTRATION_COUNT_URL;

  if (!endpoint) {
    return Response.json(
      { total: 0, error: "Registration count URL is missing" },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(endpoint, {
      redirect: "follow",
      next: {
        revalidate: 60,
      },
    });

    if (!response.ok) {
      throw new Error("Google endpoint returned an error");
    }

    const data = (await response.json()) as {
      ok?: boolean;
      total?: unknown;
    };

    const total = Number(data.total);

    if (
      data.ok === false ||
      !Number.isFinite(total) ||
      total < 0
    ) {
      throw new Error("Invalid registration total");
    }

    return Response.json(
      {
        total: Math.floor(total),
      },
      {
        headers: {
          "Cache-Control":
            "public, s-maxage=60, stale-while-revalidate=300",
        },
      }
    );
  } catch {
    return Response.json(
      {
        total: 0,
        error: "Registration total is temporarily unavailable",
      },
      {
        status: 502,
      }
    );
  }
}