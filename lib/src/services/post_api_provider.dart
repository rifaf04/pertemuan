import 'package:app_pertemuan/src/scoped_model/post_model.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:app_pertemuan/src/models/post.dart';

class PostApiProvider {

  static final PostApiProvider _singleton = PostApiProvider._internal();
  factory PostApiProvider() => _singleton;
  PostApiProvider._internal();


  Future<List<Post>> fetchPosts() async {
    final res = await http.get('https://jsonplaceholder.typicode.com/posts');
    final List<dynamic> parsedPosts = json.decode(res.body);

    return parsedPosts.map((parsedPost) => Post.fromJSON(parsedPost)).take(2).toList();
  }
}
