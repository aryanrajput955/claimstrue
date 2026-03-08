import React, { Suspense } from "react";
import FormComponent from "../../components/form";

// Keep this file as a server component but wrap the client component in Suspense
export default async function FormPage({ params }) {
  const { formID } = await params;
  return (
    <Suspense fallback={<div className="p-8">Loading form...</div>}>
      <FormComponent formId={formID} />
    </Suspense>
  );
}