<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class Usercontroller extends Controller
{
    public function index(Request $request)
    {
        $searchTerm = $request->input('search');
        $rowsPerPage = $request->input('rowsPerPage');
        $sortOrder = $request->input('sortOrder', 'asc'); // Default sort order is ascending

        $users = User::query();

        if ($searchTerm) {
            $users->where('name', 'like', '%' . $searchTerm . '%')
                ->orWhere('email', 'like', '%' . $searchTerm . '%');
        }

        // Add the sort logic based on the selected sort order
        if ($sortOrder === 'asc') {
            $users->orderBy('name', 'asc');
        } else {
            $users->orderBy('name', 'desc');
        }

        $users = $users->paginate($rowsPerPage);

        return response()->json($users);
    }

    public function store(Request $request)
    {
        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        return response()->json('Successfully Created');
    }
    public function edit($id)
    {
        return response()->json(User::whereId($id)->first());
    }
    public function update(Request $request, $id)
    {

        $user = User::whereId($id)->first();
        $user->update([
            'name' => $request->name,
            'email' => $request->email,

        ]);
        return response()->json('success');
    }
    public function destroy($id)
    {
        User::whereId($id)->first()->delete();
        return response()->json('successfully delete');
    }

    public function show($id)
    {
        // Find the user by ID
        $user = User::findOrFail($id);

        // Return the user in the response
        return response()->json($user, 200);
    }


}
