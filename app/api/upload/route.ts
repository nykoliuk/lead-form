import {v4 as uuidv4} from 'uuid';
import {supabase} from '@/lib/db/supabase-client';

export async function POST(req: Request): Promise<Response> {
	try {
		const formData: FormData = await req.formData();
		const resumeFile: File = formData.get('resume') as File;

		if (!resumeFile) {
			return new Response(JSON.stringify({error: 'Resume file is required'}), {
				status: 400,
			});
		}

		const fileExtension: string | undefined = resumeFile.name.split('.').pop();
		const filePath: string = `${uuidv4()}.${fileExtension}`;

		const fileArrayBuffer: ArrayBuffer = await resumeFile.arrayBuffer();
		const fileBuffer: Uint8Array<ArrayBuffer> = new Uint8Array(fileArrayBuffer);

		const {data: storageData, error: storageError} = await supabase.storage
			.from('alma-test')
			.upload(filePath, fileBuffer, {
				contentType: resumeFile.type,
				upsert: false,
			});

		if (storageError) {
			console.error('Error uploading file:', storageError);
			return new Response(JSON.stringify({error: 'Failed to upload resume'}), {
				status: 400,
			});
		}

		const {
			data: {publicUrl},
		} = supabase.storage.from('alma-test').getPublicUrl(filePath);

		return new Response(
			JSON.stringify({
				success: true,
				message: 'File uploaded successfully',
				fileUrl: publicUrl,
			}),
			{
				status: 200,
			}
		);
	} catch (error) {
		console.error('Unexpected error:', error);
		return new Response(JSON.stringify({error: 'An unexpected error occurred during file upload'}), {
			status: 500,
		});
	}
}
